import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    particleLayers?: THREE.Points[];
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      winWidth / winHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(winWidth, winHeight);

    // Particle shader with glow effect
    const particleVertex = `
      attribute float size;
      attribute float depth;
      attribute vec3 color;
      
      varying vec3 vColor;
      varying float vDepth;
      
      uniform float uTime;
      
      void main() {
        vColor = color;
        vDepth = depth;
        
        vec3 pos = position;
        
        // Parallax movement based on depth
        pos.x += sin(uTime * 0.2 * depth + position.y * 0.1) * 2.0 * depth;
        pos.y += cos(uTime * 0.15 * depth + position.x * 0.1) * 2.0 * depth;
        pos.z += sin(uTime * 0.1 * depth) * 5.0 * depth;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const particleFragment = `
      varying vec3 vColor;
      varying float vDepth;
      
      void main() {
        // Circular particle with soft glow
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        // Core glow
        float coreGlow = 1.0 - smoothstep(0.0, 0.3, dist);
        // Outer glow
        float outerGlow = 1.0 - smoothstep(0.0, 0.5, dist);
        
        float alpha = coreGlow * 0.8 + outerGlow * 0.3;
        
        // Depth-based transparency for blur effect
        alpha *= (1.0 - vDepth * 0.3);
        
        vec3 finalColor = vColor * (1.0 + coreGlow * 0.5);
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const particleLayers: THREE.Points[] = [];
    
    // Create 3 layers of particles for parallax depth
    const layers = [
      { count: 150, depthRange: [0.3, 0.5], sizeRange: [1.5, 3], color: new THREE.Color(0x00E0FF) },
      { count: 200, depthRange: [0.5, 0.7], sizeRange: [1, 2], color: new THREE.Color(0x00BFFF) },
      { count: 250, depthRange: [0.7, 1.0], sizeRange: [0.5, 1.5], color: new THREE.Color(0x0099CC) },
    ];

    layers.forEach((layer) => {
      const particleCount = layer.count;
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const depths = new Float32Array(particleCount);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // Random position in 3D space
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

        // Random size within layer range
        sizes[i] = layer.sizeRange[0] + Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]);

        // Depth factor for parallax
        depths[i] = layer.depthRange[0] + Math.random() * (layer.depthRange[1] - layer.depthRange[0]);

        // Color with slight variation
        const colorVariation = 0.9 + Math.random() * 0.2;
        colors[i * 3] = layer.color.r * colorVariation;
        colors[i * 3 + 1] = layer.color.g * colorVariation;
        colors[i * 3 + 2] = layer.color.b * colorVariation;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute('depth', new THREE.BufferAttribute(depths, 1));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.ShaderMaterial({
        vertexShader: particleVertex,
        fragmentShader: particleFragment,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
        },
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      particleLayers.push(particles);
    });

    sceneRef.current = { scene, camera, renderer, particleLayers };

    // Animation loop - targeting 60fps
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        lastTime = currentTime - (deltaTime % frameInterval);

        // Update all particle layers
        particleLayers.forEach((layer, index) => {
          const material = layer.material as THREE.ShaderMaterial;
          if (material.uniforms.uTime) {
            material.uniforms.uTime.value += 0.008; // Slow, smooth movement
          }
        });

        // Slow camera rotation for cinematic effect
        camera.position.x = Math.sin(lastTime * 0.00005) * 2;
        camera.position.y = Math.cos(lastTime * 0.00003) * 2;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }

      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate(0);

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      particleLayers.forEach((layer) => {
        layer.geometry.dispose();
        (layer.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(180deg, #02040A 0%, #0B0F1C 100%)',
      }}
    />
  );
};

export default WaveBackground;

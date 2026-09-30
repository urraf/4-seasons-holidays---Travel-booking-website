import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useSeason } from '../../context/SeasonContext';

// Animated 3D Jet Airplane
function OrbitingAirplane({ radius = 3.2, speed = 0.4, inclination = 0.3, offset = 0 }) {
  const planeRef = useRef<THREE.Group>(null);
  const { theme } = useSeason();

  useFrame((state) => {
    if (!planeRef.current) return;
    const t = state.clock.elapsedTime * speed + offset;

    // Calculate orbit position
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 2) * inclination;

    planeRef.current.position.set(x, y, z);

    // Tangent direction for smooth rotation facing forward
    const nextX = Math.cos(t + 0.05) * radius;
    const nextZ = Math.sin(t + 0.05) * radius;
    const nextY = Math.sin((t + 0.05) * 2) * inclination;

    planeRef.current.lookAt(nextX, nextY, nextZ);
  });

  return (
    <group ref={planeRef}>
      {/* Fuselage */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.08, 0.45, 8]} />
        <meshStandardMaterial color={theme.primary} roughness={0.2} metalness={0.8} emissive={theme.primary} emissiveIntensity={0.5} />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[0.6, 0.02, 0.12]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Tail Fin */}
      <mesh position={[0, 0.08, -0.18]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[0.02, 0.12, 0.08]} />
        <meshStandardMaterial color={theme.accent} emissive={theme.accent} emissiveIntensity={0.6} />
      </mesh>
      {/* Jet Engine Glow Light */}
      <pointLight position={[0, 0, -0.25]} intensity={1.5} color={theme.primary} distance={1.5} />
    </group>
  );
}

// 3D Animated Globe with Flight Arcs & Latitude Lines
function TravelGlobe() {
  const globeGroupRef = useRef<THREE.Group>(null);
  const latitudeLinesRef = useRef<THREE.Group>(null);
  const { theme } = useSeason();

  // Generate Flight Arcs
  const flightArcs = useMemo(() => {
    const arcs: THREE.Vector3[][] = [];
    const numArcs = 6;
    const radius = 2.6;

    for (let i = 0; i < numArcs; i++) {
      // Pick random start and end points on sphere
      const phi1 = Math.random() * Math.PI * 2;
      const theta1 = (Math.random() - 0.5) * Math.PI * 0.8;
      const start = new THREE.Vector3().setFromSphericalCoords(radius, theta1 + Math.PI / 2, phi1);

      const phi2 = phi1 + (Math.random() + 0.5) * Math.PI * 0.7;
      const theta2 = (Math.random() - 0.5) * Math.PI * 0.8;
      const end = new THREE.Vector3().setFromSphericalCoords(radius, theta2 + Math.PI / 2, phi2);

      // Mid control point pulled outward to form curved flight trajectory arc
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.7);
      mid.normalize().multiplyScalar(radius * 1.45);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      arcs.push(curve.getPoints(40));
    }
    return arcs;
  }, []);

  useFrame((state) => {
    if (!globeGroupRef.current) return;
    globeGroupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    if (latitudeLinesRef.current) {
      latitudeLinesRef.current.rotation.y = state.clock.elapsedTime * -0.03;
      latitudeLinesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={[0, -0.4, 0]} ref={globeGroupRef}>
        {/* Core Ocean Sphere */}
        <mesh>
          <sphereGeometry args={[2.5, 48, 48]} />
          <meshStandardMaterial
            color={theme.skyTop}
            roughness={0.3}
            metalness={0.7}
            emissive={theme.bg}
            emissiveIntensity={0.6}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Continents / Wireframe Terrain Grid */}
        <mesh>
          <icosahedronGeometry args={[2.53, 3]} />
          <meshStandardMaterial
            color={theme.secondary}
            wireframe
            transparent
            opacity={0.3}
            emissive={theme.secondary}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Latitude & Longitude Navigation Rings */}
        <group ref={latitudeLinesRef}>
          {[-1.2, -0.6, 0, 0.6, 1.2].map((y, idx) => (
            <mesh key={idx} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[Math.sqrt(Math.max(0, 2.58 * 2.58 - y * y)), 0.01, 16, 64]} />
              <meshBasicMaterial color={theme.primary} transparent opacity={0.25} />
            </mesh>
          ))}
        </group>

        {/* Flight Trajectory Arcs */}
        {flightArcs.map((points, idx) => (
          <line key={idx}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array(points.flatMap((v) => [v.x, v.y, v.z])), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={theme.primary} transparent opacity={0.75} linewidth={2} />
          </line>
        ))}

        {/* Orbiting Jet Airplanes */}
        <OrbitingAirplane radius={3.1} speed={0.35} inclination={0.6} offset={0} />
        <OrbitingAirplane radius={3.4} speed={-0.25} inclination={-0.8} offset={2} />
        <OrbitingAirplane radius={3.7} speed={0.45} inclination={0.3} offset={4} />

        {/* External Radar Ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[4.2, 0.015, 16, 120]} />
          <meshBasicMaterial color={theme.primary} transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

// 3D Floating Navigational Compass Rose
function FloatingCompass() {
  const compassRef = useRef<THREE.Group>(null);
  const needleRef = useRef<THREE.Group>(null);
  const { theme } = useSeason();

  useFrame((state) => {
    if (!compassRef.current) return;
    compassRef.current.rotation.y = state.clock.elapsedTime * -0.04;
    if (needleRef.current) {
      needleRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.25;
    }
  });

  return (
    <group ref={compassRef} position={[-4.5, 2.2, -3]} rotation={[0.4, 0.5, 0]}>
      {/* Outer Dial Ring */}
      <mesh>
        <torusGeometry args={[1.2, 0.02, 16, 64]} />
        <meshBasicMaterial color={theme.primary} transparent opacity={0.6} />
      </mesh>
      {/* Inner Ticks */}
      <mesh>
        <torusGeometry args={[1.0, 0.01, 16, 64]} />
        <meshBasicMaterial color={theme.accent} transparent opacity={0.4} />
      </mesh>
      {/* Animated Compass Needle */}
      <group ref={needleRef}>
        {/* North Pointer (Neon Primary) */}
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.08, 0.9, 4]} />
          <meshBasicMaterial color={theme.primary} transparent opacity={0.9} />
        </mesh>
        {/* South Pointer (Secondary Accent) */}
        <mesh position={[0, -0.5, 0]} rotation={[0, 0, Math.PI]}>
          <coneGeometry args={[0.08, 0.9, 4]} />
          <meshBasicMaterial color={theme.secondary} transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// 3D Hot Air Balloon Floating in Background
function HotAirBalloon({ position = [4.5, 1.5, -4], scale = 0.6 }) {
  const balloonRef = useRef<THREE.Group>(null);
  const { theme } = useSeason();

  useFrame((state) => {
    if (!balloonRef.current) return;
    balloonRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
    balloonRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={balloonRef} position={position as [number, number, number]} scale={scale}>
      {/* Balloon Envelope */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshStandardMaterial
          color={theme.primary}
          roughness={0.3}
          metalness={0.4}
          emissive={theme.accent}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Basket */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.35, 0.3, 0.35]} />
        <meshStandardMaterial color="#332211" roughness={0.8} />
      </mesh>
      {/* Basket Burner Glow Light */}
      <pointLight position={[0, -0.1, 0]} intensity={1.5} color={theme.accent} distance={2} />
    </group>
  );
}

// Floating seasonal particles (petals/leaves/snow/dust)
function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { theme, progress } = useSeason();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 22,
        ],
        speed: 0.2 + Math.random() * 0.8,
        rotation: Math.random() * Math.PI * 2,
        scale: 0.02 + Math.random() * 0.06,
        wobble: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      const y = ((p.position[1] - time * p.speed * 0.3) % 22 + 22) % 22 - 11;
      const x = p.position[0] + Math.sin(time * 0.3 + p.wobble) * 0.6;
      const z = p.position[2] + Math.cos(time * 0.2 + p.wobble) * 0.4;

      dummy.position.set(x, y, z);
      dummy.rotation.set(
        time * p.speed * 0.5 + p.rotation,
        time * p.speed * 0.3,
        time * p.speed * 0.2
      );

      const scaleModifier = progress > 0.75 ? 0.5 : 1;
      dummy.scale.setScalar(p.scale * scaleModifier);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  const color = useMemo(() => new THREE.Color(theme.primary), [theme.primary]);

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={color} side={THREE.DoubleSide} transparent opacity={0.65} />
    </instancedMesh>
  );
}

// Atmospheric background stars
function StarField() {
  const { theme } = useSeason();
  const starsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(350 * 3);
    const col = new Float32Array(350 * 3);
    const primaryColor = new THREE.Color(theme.primary);

    for (let i = 0; i < 350; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      col[i * 3] = primaryColor.r;
      col[i * 3 + 1] = primaryColor.g;
      col[i * 3 + 2] = primaryColor.b;
    }
    return [pos, col];
  }, [theme.primary]);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

// Camera parallax following cursor
function CameraRig() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 0.7 - camera.position.x) * 0.03;
    camera.position.y += (-mouseRef.current.y * 0.5 + 1 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  const [dpr, setDpr] = useState(1.5);
  const { theme } = useSeason();

  useEffect(() => {
    const deviceDpr = Math.min(window.devicePixelRatio, 2);
    setDpr(deviceDpr);
  }, []);

  const fogColor = useMemo(() => new THREE.Color(theme.bg), [theme.bg]);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 1, 8.5], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 6]} intensity={1.3} color={theme.primary} />
        <pointLight position={[-5, -2, 4]} intensity={1.8} color={theme.secondary} />
        <pointLight position={[0, 4, -2]} intensity={2.2} color={theme.accent} />
        <CameraRig />

        {/* Animated Travel Components */}
        <TravelGlobe />
        <FloatingCompass />
        <HotAirBalloon position={[4.2, 1.8, -3.5]} scale={0.55} />
        <HotAirBalloon position={[-4.0, -1.2, -5.0]} scale={0.4} />

        <StarField />
        <Particles count={200} />
        <Environment preset="city" />
        <fog attach="fog" args={[fogColor.getHexString(), 6, 26]} />
      </Canvas>
    </div>
  );
}
className = "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[90px] opacity-40 animate-pulse"
style = {{ background: 'radial-gradient(circle, #d4af37 0%, rgba(6,21,45,0) 70%)' }}
        />
  < div
className = "absolute bottom-10 right-0 w-64 h-64 rounded-full blur-[80px] opacity-30"
style = {{ background: 'radial-gradient(circle, #f5d77f 0%, rgba(6,21,45,0) 70%)' }}
        />
{/* Subtle Decorative Celestial Rings */ }
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#d4af37]/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-[#d4af37]/10 pointer-events-none" />
      </div >
    );
  }

return (
  <div ref={containerRef} className="absolute inset-0 z-0">
    {isVisible && (
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0.3, 6.2], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[6, 8, 6]} intensity={1.3} color={theme.primary} />
        <pointLight position={[-5, -2, 4]} intensity={1.8} color={theme.secondary} />
        <pointLight position={[0, 4, -2]} intensity={2.2} color={theme.accent} />
        <CameraRig />

        {/* Animated Travel Components */}
        <TravelGlobe />
        <FloatingCompass />
        <HotAirBalloon position={[4.2, 1.8, -3.5]} scale={0.55} />
        <HotAirBalloon position={[-4.0, -1.2, -5.0]} scale={0.4} />

        <StarField count={350} />
        <Particles count={200} />
        <Environment preset="city" />
        <fog attach="fog" args={[fogColor.getHexString(), 6, 26]} />
      </Canvas>
    )}
  </div>
);
}

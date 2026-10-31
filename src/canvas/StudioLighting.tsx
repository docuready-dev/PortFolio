import { Environment } from '@react-three/drei'
import { usePortfolioStore } from '../store'

export function StudioLighting() {
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'

  return (
    <>
      {/* Studio Environment preset for high-fidelity physical glass reflections */}
      <Environment preset="studio" />

      {/* Ambient fill light tuned for dark vs light backdrop */}
      <ambientLight intensity={isDark ? 0.45 : 0.65} />

      {/* Key directional light with optimized soft shadow mapping */}
      <directionalLight
        position={[8, 14, 10]}
        intensity={isDark ? 1.6 : 1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-camera-near={1}
        shadow-camera-far={45}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
      />

      {/* Secondary soft fill light preserving tone balance */}
      <directionalLight
        position={[-8, -10, -6]}
        intensity={isDark ? 0.2 : 0.35}
        color={isDark ? '#23232a' : '#F4F3EF'}
      />

      {/* Soft cobalt rim light for subtle edge dispersion */}
      <pointLight
        position={[-7, 5, 4]}
        intensity={isDark ? 36 : 25}
        color="#3b82f6"
        distance={25}
        decay={2}
      />

      {/* Warm amber rim light for refractive warmth on glass surfaces */}
      <pointLight
        position={[7, -4, 4]}
        intensity={isDark ? 38 : 30}
        color="#f59e0b"
        distance={25}
        decay={2}
      />

      {/* Distal violet-indigo rim light sculpting silhouettes against background */}
      <pointLight
        position={[0, 8, -8]}
        intensity={isDark ? 28 : 18}
        color="#818cf8"
        distance={30}
        decay={2}
      />
    </>
  )
}

export default StudioLighting

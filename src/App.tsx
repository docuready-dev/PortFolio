import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, PerformanceMonitor, Preload } from '@react-three/drei'
import { SheetProvider } from '@theatre/r3f'
import { mainSheet } from './theatre'
import { SceneDirector } from './canvas/SceneDirector'
import { PostProcessingPipeline } from './canvas/PostProcessingPipeline'
import { ScenePreloader } from './canvas/ScenePreloader'
import { NavigationBar } from './overlay/NavigationBar'
import { HtmlOverlay } from './overlay/HtmlOverlay'
import { ProjectModal } from './overlay/ProjectModal'
import { usePortfolioStore } from './store'

export default function App() {
  const dpr = usePortfolioStore((s) => s.dpr)
  const setDpr = usePortfolioStore((s) => s.setDpr)
  const setIsLowQuality = usePortfolioStore((s) => s.setIsLowQuality)
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'

  return (
    <div
      className={`fixed inset-0 w-full h-full overflow-hidden select-none transition-colors duration-500 ${
        isDark ? 'bg-[#0B0B0E] text-[#F4F3EF] dark-theme' : 'bg-alabaster text-ink'
      }`}
    >
      {/* Sticky Minimalist Top Navigation Bar */}
      <NavigationBar />

      {/* Case Study Modal Overlay */}
      <ProjectModal />

      {/* Persistent React Three Fiber Canvas with Hardware & DPR Optimizations */}
      <Canvas
        shadows={{ type: THREE.PCFSoftShadowMap }}
        dpr={dpr}
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: true,
          alpha: false,
        }}
        camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 75 }}
        className="w-full h-full touch-none"
      >
        <color attach="background" args={[isDark ? '#0B0B0E' : '#F4F3EF']} />

        {/* PerformanceMonitor dynamically scales DPR and lowers transmission samples if FPS < 55 */}
        <PerformanceMonitor
          onDecline={() => {
            setIsLowQuality(true)
            setDpr(1.0)
          }}
          onIncline={() => {
            setIsLowQuality(false)
            setDpr(1.5)
          }}
          onChange={({ factor }) => {
            // Smoothly clamp DPR scale between 1.0 and 1.5 based on real-time device capability
            const targetDpr = Math.round((1.0 + factor * 0.5) * 10) / 10
            setDpr(targetDpr)
            setIsLowQuality(factor < 0.6)
          }}
          bounds={() => [55, 60]}
        >
          {/* 6-page synchronized scroll controls */}
          <ScrollControls pages={6} damping={0.12}>
            <SheetProvider sheet={mainSheet}>
              <SceneDirector sheet={mainSheet} />
            </SheetProvider>

            {/* Editorial DOM typography matching all 6 pages */}
            <Scroll html style={{ width: '100%' }}>
              <HtmlOverlay />
            </Scroll>
          </ScrollControls>

          {/* Post-Processing: Tactile film grain Noise & gentle Bloom */}
          <PostProcessingPipeline />

          {/* Pre-compile all materials, shaders, and geometry upfront to eliminate shader compilation scroll jank */}
          <ScenePreloader />
          <Preload all />
        </PerformanceMonitor>
      </Canvas>
    </div>
  )
}

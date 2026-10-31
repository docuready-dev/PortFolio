import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { SceneDirector } from './canvas/SceneDirector'
import { NavigationBar } from './overlay/NavigationBar'
import { HtmlOverlay } from './overlay/HtmlOverlay'
import { ProjectModal } from './overlay/ProjectModal'
import { usePortfolioStore } from './store'

export default function App() {
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

      {/* Synchronized Smooth Scroll Engine with 0 3D Overhead */}
      <Canvas
        gl={{
          antialias: false,
          depth: false,
          stencil: false,
          alpha: true,
          powerPreference: 'low-power',
        }}
        className="w-full h-full touch-none"
      >
        {/* 6-page synchronized smooth scroll controls with inertia damping */}
        <ScrollControls pages={6} damping={0.12}>
          <SceneDirector />

          {/* Editorial DOM typography matching all 6 pages */}
          <Scroll html style={{ width: '100%' }}>
            <HtmlOverlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

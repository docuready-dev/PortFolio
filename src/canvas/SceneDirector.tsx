import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { usePortfolioStore } from '../store'

export function SceneDirector() {
  const scroll = useScroll()
  const setScrollProgress = usePortfolioStore((s) => s.setScrollProgress)
  const setActiveDomain = usePortfolioStore((s) => s.setActiveDomain)

  // Expose scroll object on window for navigation bar jumps
  if (typeof window !== 'undefined') {
    ;(window as any).__DREI_SCROLL__ = scroll
  }

  useFrame(() => {
    // Synchronize scroll progress for responsive navigation highlights
    setScrollProgress(scroll.offset)

    if (scroll.offset < 0.15) {
      setActiveDomain('all')
    } else if (scroll.offset < 0.35) {
      setActiveDomain('graphic')
    } else if (scroll.offset < 0.55) {
      setActiveDomain('web')
    } else if (scroll.offset < 0.75) {
      setActiveDomain('app')
    } else {
      setActiveDomain('all')
    }
  })

  // 3D meshes and live wallpaper are stopped; return null for pure 0-GPU scroll performance
  return null
}

export default SceneDirector

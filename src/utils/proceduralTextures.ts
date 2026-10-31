import * as THREE from 'three'
import type { ProjectItem } from '../types'

const textureCache = new Map<string, THREE.CanvasTexture>()

/**
 * Pre-generates all project canvas textures upfront during application startup
 * to prevent CPU stalls when scrolling into the Selected Works gallery.
 */
export function pregenerateAllProjectTextures(projects: ProjectItem[]) {
  for (const p of projects) {
    getProceduralProjectTexture(p)
  }
}

/**
 * Procedurally generates high-resolution editorial Swiss poster / UI textures
 * for portfolio project planes using HTML5 Canvas with zero external image dependencies.
 */
export function getProceduralProjectTexture(project: ProjectItem): THREE.CanvasTexture {
  if (textureCache.has(project.id)) {
    return textureCache.get(project.id)!
  }

  const width = 1200
  const height = 800
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')!
  if (!ctx) {
    const fallback = new THREE.CanvasTexture(canvas)
    return fallback
  }

  // 1. Primary Warm Alabaster Canvas Base
  ctx.fillStyle = '#F4F3EF'
  ctx.fillRect(0, 0, width, height)

  // 2. Subtle Geometric Grid Lines (Swiss International Grid)
  ctx.strokeStyle = 'rgba(17, 17, 21, 0.06)'
  ctx.lineWidth = 1.5
  for (let x = 60; x < width; x += 120) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  for (let y = 60; y < height; y += 100) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  // 3. Top Editorial Header Bar
  ctx.fillStyle = '#111115'
  ctx.font = '700 28px "JetBrains Mono", monospace'
  ctx.fillText(project.number, 60, 80)

  ctx.font = '600 16px "Inter", sans-serif'
  ctx.letterSpacing = '2px'
  ctx.fillStyle = '#686870'
  ctx.fillText(project.category.toUpperCase(), 140, 78)

  ctx.font = '500 16px "JetBrains Mono", monospace'
  ctx.textAlign = 'right'
  ctx.fillText(`ARCHIVE // ${project.year}`, width - 60, 78)
  ctx.textAlign = 'left'

  // Top dividing hairline rule
  ctx.strokeStyle = '#111115'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(60, 105)
  ctx.lineTo(width - 60, 105)
  ctx.stroke()

  // 4. Central Graphic Feature Area depending on Domain
  if (project.domain === 'graphic') {
    // Graphic Design: Bold Bauhaus geometric composition & concentric rings
    ctx.save()
    ctx.translate(width / 2, 330)

    // Dynamic accent color ring
    ctx.strokeStyle = project.accentColor
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.arc(0, 0, 140, 0, Math.PI * 2)
    ctx.stroke()

    // Inner Deep Ink ring
    ctx.strokeStyle = '#111115'
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.arc(0, 0, 95, 0, Math.PI * 2)
    ctx.stroke()

    // Geometric diagonal accent wedge
    ctx.fillStyle = '#111115'
    ctx.beginPath()
    ctx.moveTo(-160, -40)
    ctx.lineTo(160, 40)
    ctx.lineTo(160, 80)
    ctx.lineTo(-160, 0)
    ctx.closePath()
    ctx.fill()

    // Focal typographic numeral
    ctx.fillStyle = '#F4F3EF'
    ctx.font = '900 72px "Inter", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(project.number, 0, 0)
    ctx.restore()
  } else if (project.domain === 'web') {
    // Web Design: High-contrast wireframe browser card layout
    ctx.save()
    const bx = 160
    const by = 150
    const bw = width - 320
    const bh = 360

    // Browser Outer Card
    ctx.fillStyle = '#FFFFFF'
    ctx.shadowColor = 'rgba(17, 17, 21, 0.08)'
    ctx.shadowBlur = 24
    ctx.shadowOffsetY = 12
    roundRect(ctx, bx, by, bw, bh, 16)
    ctx.fill()
    ctx.shadowColor = 'transparent'

    // Browser Border
    ctx.strokeStyle = 'rgba(17, 17, 21, 0.12)'
    ctx.lineWidth = 1.5
    roundRect(ctx, bx, by, bw, bh, 16)
    ctx.stroke()

    // Browser Window Header
    ctx.fillStyle = '#F4F3EF'
    roundRectTop(ctx, bx, by, bw, 44, 16)
    ctx.fill()

    // Traffic light dots
    ctx.fillStyle = '#EF4444'
    ctx.beginPath()
    ctx.arc(bx + 28, by + 22, 6, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#F59E0B'
    ctx.beginPath()
    ctx.arc(bx + 46, by + 22, 6, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#10B981'
    ctx.beginPath()
    ctx.arc(bx + 64, by + 22, 6, 0, Math.PI * 2)
    ctx.fill()

    // Address Bar
    ctx.fillStyle = '#FFFFFF'
    roundRect(ctx, bx + 90, by + 12, bw - 180, 20, 6)
    ctx.fill()

    // Inner Web Layout Wireframe
    ctx.fillStyle = project.accentColor
    ctx.fillRect(bx + 32, by + 68, 180, 80)

    ctx.fillStyle = '#111115'
    ctx.fillRect(bx + 230, by + 76, 260, 20)
    ctx.fillStyle = '#686870'
    ctx.fillRect(bx + 230, by + 108, 180, 12)
    ctx.fillRect(bx + 230, by + 128, 220, 12)

    // Chart bar wireframes
    for (let i = 0; i < 7; i++) {
      const barH = 50 + (i % 3) * 35 + i * 8
      ctx.fillStyle = i === 4 ? project.accentColor : 'rgba(17, 17, 21, 0.15)'
      ctx.fillRect(bx + 40 + i * 110, by + bh - 32 - barH, 70, barH)
    }
    ctx.restore()
  } else {
    // App Development: Smartphone UI Dashboard mockup
    ctx.save()
    const pw = 280
    const ph = 380
    const px = (width - pw) / 2
    const py = 140

    // Phone body
    ctx.fillStyle = '#111115'
    ctx.shadowColor = 'rgba(17, 17, 21, 0.15)'
    ctx.shadowBlur = 30
    ctx.shadowOffsetY = 16
    roundRect(ctx, px, py, pw, ph, 32)
    ctx.fill()
    ctx.shadowColor = 'transparent'

    // Phone screen
    ctx.fillStyle = '#F4F3EF'
    roundRect(ctx, px + 8, py + 8, pw - 16, ph - 16, 26)
    ctx.fill()

    // Dynamic Island
    ctx.fillStyle = '#111115'
    roundRect(ctx, px + pw / 2 - 36, py + 16, 72, 14, 7)
    ctx.fill()

    // Widget Cards
    ctx.fillStyle = '#FFFFFF'
    roundRect(ctx, px + 24, py + 52, pw - 48, 80, 12)
    ctx.fill()

    ctx.fillStyle = project.accentColor
    ctx.beginPath()
    ctx.arc(px + 60, py + 92, 20, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#111115'
    ctx.fillRect(px + 94, py + 80, 110, 12)
    ctx.fillStyle = '#686870'
    ctx.fillRect(px + 94, py + 100, 70, 8)

    // Secondary UI cards
    ctx.fillStyle = '#FFFFFF'
    roundRect(ctx, px + 24, py + 148, (pw - 60) / 2, 90, 12)
    ctx.fill()
    roundRect(ctx, px + 36 + (pw - 60) / 2, py + 148, (pw - 60) / 2, 90, 12)
    ctx.fill()

    // Orbiting node ring decoration behind phone
    ctx.strokeStyle = project.accentColor
    ctx.lineWidth = 2
    ctx.setLineDash([8, 6])
    ctx.beginPath()
    ctx.arc(width / 2, 330, 240, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.restore()
  }

  // 5. Bottom Editorial Information & Typography
  // Tagline / Headline
  ctx.fillStyle = '#111115'
  ctx.font = '700 48px "Inter", sans-serif'
  ctx.fillText(project.title, 60, height - 120)

  // Subtitle
  ctx.fillStyle = '#686870'
  ctx.font = '500 22px "Inter", sans-serif'
  ctx.fillText(project.subtitle, 60, height - 76)

  // Accent Color Indicator Pill
  const pillW = 160
  const pillH = 38
  const pillX = width - 60 - pillW
  const pillY = height - 110
  ctx.fillStyle = project.accentColor
  roundRect(ctx, pillX, pillY, pillW, pillH, 19)
  ctx.fill()

  ctx.fillStyle = '#FFFFFF'
  ctx.font = '700 13px "JetBrains Mono", monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('EXPLORE CASE', pillX + pillW / 2, pillY + pillH / 2)
  ctx.textAlign = 'left'

  // Create Three.js CanvasTexture with high quality filtering
  const texture = new THREE.CanvasTexture(canvas)
  texture.generateMipmaps = true
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  texture.needsUpdate = true

  textureCache.set(project.id, texture)
  return texture
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function roundRectTop(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h)
  ctx.lineTo(x, y + h)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

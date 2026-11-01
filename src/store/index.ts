import { create } from 'zustand'
import type { ProjectItem, CreativeDomain } from '../types'

export const FLAGSHIP_PROJECTS: ProjectItem[] = [
  {
    id: 'strovr',
    number: '01',
    title: 'Strovr',
    subtitle: 'Email Marketing, Lead Generation & Growth CRM Platform',
    domain: 'web',
    category: 'Growth SaaS & Lead Engine',
    year: 2026,
    client: 'Independent Project / strovr.space',
    role: 'Creator & Full-Stack Developer',
    liveUrl: 'https://strovr.space',
    liveAlias: 'strovr.space',
    tagline: 'Automated Lead Extraction & Bespoke Marketing Sequences',
    description:
      'A platform I designed and engineered from the ground up, featuring dynamic email marketing templates, automated lead extraction via SerpApi, and an intuitive customer relationship management workflow.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Firebase', 'SerpApi'],
    architecture: [
      'Engineered SerpApi query pipeline aggregating high-intent business leads in real-time',
      'Built Express & Node.js backend microservice for template compilation and dispatch',
      'Designed Firebase Firestore real-time pipeline managing contact lists & CRM stages',
      'Crafted Vite-optimized frontend with instant routing and template previews',
    ],
    metrics: ['Live on strovr.space', '10x Lead Discovery Speed', 'Real-Time CRM Pipeline'],
    accentColor: '#3b82f6',
  },
  {
    id: 'learnready',
    number: '02',
    title: 'LearnReady',
    subtitle: 'AI-Powered Adaptive Learning & Interactive Assessment Engine',
    domain: 'web',
    category: 'EdTech & AI Evaluation Platform',
    year: 2026,
    client: 'Personal Project',
    role: 'Lead Full-Stack Engineer & UI Architect',
    liveUrl: 'https://docuready-dev.github.io/LearnReady/',
    liveAlias: 'learnready.space',
    tagline: 'Structured Curriculum Delivery with Real-Time AI Assessments',
    description:
      'A comprehensive educational web application I conceived and engineered, delivering structured interactive courses and real-time AI-generated assessments tailored to individual student mastery.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Firebase', 'AI Assessments'],
    architecture: [
      'Developed modular course player with chapter progress and persistent bookmarking',
      'Engineered algorithmic assessment engine generating dynamic quizzes based on competency',
      'Implemented Firebase authentication and real-time student performance analytics',
      'Designed responsive dashboard with Tailwind CSS and fluid micro-interactions',
    ],
    metrics: ['Live on learnready.space', 'Structured Course Pathways', 'Real-Time Mastery Scoring', 'Zero-Latency UI'],
    accentColor: '#10b981',
  },
  {
    id: 'custom-web-apps',
    number: '03',
    title: 'Custom Web & Apps',
    subtitle: 'Bespoke High-Impact Graphic Websites & Native-Grade Applications',
    domain: 'app',
    category: 'Custom Web & Mobile Engineering',
    year: 2026,
    client: 'Client Commissions & Personal Works',
    role: 'Designer & Full-Stack Developer',
    tagline: 'Bespoke Digital Products Bridging Raw Code & Striking Identity',
    description:
      'A curated collection of bespoke web and mobile applications I engineered for ventures and clients, featuring fluid UI/UX layouts, motion physics, and production-grade architectures.',
    stack: ['React', 'Tailwind CSS', 'Three.js', 'Node.js', 'Express', 'MongoDB Atlas'],
    architecture: [
      'Custom design systems tailored from Figma to pixel-perfect component trees',
      'Spatial 3D graphics and GLSL shader enhancements for elevated brand identity',
      'Scalable RESTful API backends with MongoDB Atlas clustering and JWT auth',
      'Mobile-first responsive engineering delivering 60 FPS touch performance',
    ],
    metrics: ['Production Deployed', 'Fluid Touch Gestures', '100% Custom Engineering'],
    accentColor: '#f59e0b',
  },
  {
    id: 'aether-os',
    number: '04',
    title: 'Aether Mobile OS',
    subtitle: 'Spatial Computing Interface & Fluid Gesture Engine',
    domain: 'app',
    category: 'Spatial UI & Operating System',
    year: 2026,
    client: 'Aether Labs Mobile',
    role: 'Head of Human Interface Design',
    tagline: 'Deep Depth UI Architecture for Next-Generation Mobile Apps',
    description:
      'An experimental mobile operating system interface designed around depth perception, frosted glass materials, and spatial kinetic physics. Widgets dynamically separate in 3D space during multi-tasking.',
    stack: ['React Native', 'Tailwind CSS', 'Three.js', 'Linear Algebra Engine'],
    architecture: [
      'GPU shader-based real-time Gaussian and frosted glass blur pipeline',
      '60 FPS spatial depth parallax responding to device gyroscopes and optical tracking',
      'Haptic feedback synchronized with virtual spring-damper dynamics',
    ],
    metrics: ['Apple Design Award Nominee', '4.9/5 Developer Beta Rating'],
    accentColor: '#8b5cf6',
  },
  {
    id: 'atelier-kinetic',
    number: '06',
    title: 'Atelier Kinetic',
    subtitle: 'Generative Swiss Identity & Spatial Graphic System',
    domain: 'graphic',
    category: 'Brand Identity & Generative Art',
    year: 2025,
    client: 'Atelier Helvetica',
    role: 'Lead Visual Designer & Creative Technologist',
    tagline: 'Algorithmic Typography Meets High-Fashion Physical Monograph',
    description:
      'A bespoke identity and generative publication system engineered with custom GLSL rasterization tools and mathematical grid matrices. Bridges 1960s Swiss International Style with real-time procedural typography.',
    stack: ['WebGL / GLSL', 'Variable Fonts', 'Adobe Illustrator', 'Figma'],
    architecture: [
      'Parametric glyph matrix generator producing 10,000 unique poster variations',
      'Mathematical Bézier grid subdivision rendering print-ready vector SVGs',
      'Physical spot-varnish and embossed duplex paper stocks',
    ],
    metrics: ['TDC New York Typographic Excellence', '12,000 Limited Editions Sold'],
    accentColor: '#111115',
  },
]

export interface ActiveImage {
  src: string
  title: string
  subtitle?: string
}

export interface PortfolioState {
  projects: ProjectItem[]
  activeProject: ProjectItem | null
  activeImage: ActiveImage | null
  scrollProgress: number
  scrollVelocity: number
  activeDomain: CreativeDomain | 'all'
  dpr: number
  transmissionSamples: number
  isLowQuality: boolean
  isShiftedLayout: boolean
  blurIntensity: 'frosted' | 'deep'
  theme: 'dark' | 'light'
  setActiveProject: (project: ProjectItem | null) => void
  setActiveImage: (image: ActiveImage | null) => void
  setScrollProgress: (progress: number, velocity?: number) => void
  setActiveDomain: (domain: CreativeDomain | 'all') => void
  setDpr: (dpr: number) => void
  setTransmissionSamples: (samples: number) => void
  setIsLowQuality: (low: boolean) => void
  setIsShiftedLayout: (shifted: boolean) => void
  setBlurIntensity: (intensity: 'frosted' | 'deep') => void
  setTheme: (theme: 'dark' | 'light') => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  projects: FLAGSHIP_PROJECTS,
  activeProject: null,
  activeImage: null,
  scrollProgress: 0,
  scrollVelocity: 0,
  activeDomain: 'all',
  dpr: 1.5,
  transmissionSamples: 6,
  isLowQuality: false,
  isShiftedLayout: true,
  blurIntensity: 'frosted',
  theme: 'light',
  setActiveProject: (project) => set({ activeProject: project }),
  setActiveImage: (image) => set({ activeImage: image }),
  setScrollProgress: (progress, velocity = 0) =>
    set({ scrollProgress: progress, scrollVelocity: velocity }),
  setActiveDomain: (domain) => set({ activeDomain: domain }),
  setDpr: (dpr) => set({ dpr }),
  setTransmissionSamples: (samples) => set({ transmissionSamples: samples }),
  setIsLowQuality: (low) => set({ isLowQuality: low, transmissionSamples: low ? 3 : 6 }),
  setIsShiftedLayout: (shifted) => set({ isShiftedLayout: shifted }),
  setBlurIntensity: (intensity) => set({ blurIntensity: intensity }),
  setTheme: (theme) => set({ theme }),
}))

// Expose on window in dev mode for testing and studio inspection
if (typeof window !== 'undefined') {
  ;(window as any).__PORTFOLIO_STORE__ = usePortfolioStore
}

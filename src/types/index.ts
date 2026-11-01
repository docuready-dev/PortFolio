export type CreativeDomain = 'graphic' | 'web' | 'app'

export interface ProjectItem {
  id: string
  number: string
  title: string
  subtitle: string
  domain: CreativeDomain
  category: string
  year: number
  client: string
  role: string
  description: string
  stack: string[]
  architecture: string[]
  metrics: string[]
  accentColor: string
  tagline: string
  liveUrl?: string
  liveAlias?: string
}

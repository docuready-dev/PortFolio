import { getProject } from '@theatre/core'

// Initialize the core Theatre.js project and main sheet
export const portfolioProject = getProject('PortfolioProject')
export const mainSheet = portfolioProject.sheet('MainScene')

export default {
  portfolioProject,
  mainSheet,
}

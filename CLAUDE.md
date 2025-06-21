# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Milan Stevanović built with Hugo static site generator. The site is automatically deployed to GitHub Pages at https://www.milan.bio.

## Key Commands

### Development
```bash
# Start local development server
hugo server -D

# Build the site (output to public/)
hugo

# Create new portfolio item
hugo new posts/project-name.md

# Build with minification (production)
hugo --gc --minify
```

### Content Management
- Portfolio items: Create markdown files in `content/posts/`
- Service pages: Edit `content/services.md`
- Resume: Edit `content/cv.md`
- Contact: Edit `content/contact.md`

## Architecture

### Technology Stack
- **Static Site Generator**: Hugo v0.120.3 (Extended version)
- **Theme**: Ananke
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

### Key Files
- `hugo.toml`: Main configuration (site URL, theme, menus, analytics)
- `.github/workflows/hugo.yaml`: Automated deployment workflow
- `CNAME`: Custom domain configuration (milan.bio)

### Directory Structure
- `/content/`: All website content in Markdown
- `/layouts/`: Custom Hugo templates overriding theme defaults
- `/static/`: Static assets (images, PDFs)
- `/themes/ananke/`: Complete theme directory (avoid editing directly)

### Deployment Process
1. Push changes to main branch
2. GitHub Actions workflow triggers automatically
3. Hugo builds site with minification
4. Deploys to GitHub Pages

### Content Structure
Portfolio items in `content/posts/` should include:
- `title`: Project name
- `date`: Publication date
- `draft`: false (for published items)
- `featured_image`: Path to header image
- Content: Project description and details

### Styling Configuration
- Background: Black (`bg-black`)
- Text: Black
- Fonts: Avenir
- Favicon: Swift logo (`img/swift.svg`)
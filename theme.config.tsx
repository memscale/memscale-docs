import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

// NOTE: The brief's "locked" theme.config used the Nextra v2 API
// (footer.text, useNextSeoProps, primaryHue). The architecture table
// locks Nextra v3, whose API differs — this config uses the v3 shape:
//   footer.text   -> footer.content
//   primaryHue    -> color.hue
//   useNextSeoProps (removed) -> head meta + per-page frontmatter titles
const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        src="/memscale-mark.svg"
        alt="MemScale"
        style={{ height: 24, marginRight: 8 }}
      />
      <span style={{ fontWeight: 700, fontSize: 18 }}>MemScale</span>
      <span style={{ fontWeight: 400, fontSize: 14, marginLeft: 8, opacity: 0.6 }}>
        Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/memscale/Memscale',
  },
  chat: {
    link: 'https://memscale.id',
    icon: <span style={{ fontWeight: 500, fontSize: 14 }}>memscale.id</span>,
  },
  docsRepositoryBase: 'https://github.com/memscale/memscale-docs/tree/main',
  footer: {
    content: (
      <div style={{ display: 'flex', gap: 16, fontSize: 14, flexWrap: 'wrap' }}>
        <span>© 2026 MemScale</span>
        <a href="https://memscale.id/privacy/">Privacy</a>
        <a href="https://memscale.id/terms/">Terms</a>
        <a href="https://memscale.id/license/">License</a>
        <a href="https://app.memscale.id/contact">Contact</a>
      </div>
    ),
  },
  color: {
    hue: 168, // Mint #00E0B8 hue
    saturation: 100,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MemScale Documentation" />
      <meta
        property="og:description"
        content="Memory Engineering for AI — Documentation"
      />
      <link rel="icon" type="image/png" href="/favicon-32.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config

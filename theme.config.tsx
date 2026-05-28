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
    <span className="ms-logo">
      <img
        src="/memscale-mark.svg"
        alt="MemScale"
        style={{ height: 26, marginRight: 9 }}
      />
      <span
        style={{
          fontFamily: 'var(--font-sora), ui-sans-serif, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: '-0.01em',
        }}
      >
        MemScale
      </span>
      <span className="ms-logo__tag">Docs</span>
    </span>
  ),
  project: {
    link: 'https://github.com/memscale/Memscale',
  },
  chat: {
    link: 'https://memscale.id',
    icon: (
      <span
        className="ms-nav-home"
        style={{
          fontFamily: 'var(--font-mono), ui-monospace, monospace',
          fontWeight: 500,
          fontSize: 13,
        }}
      >
        memscale.id
      </span>
    ),
  },
  docsRepositoryBase: 'https://github.com/memscale/memscale-docs/tree/main',
  footer: {
    content: (
      <div className="ms-footer">
        <span className="ms-footer__copy">© 2026 MemScale</span>
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

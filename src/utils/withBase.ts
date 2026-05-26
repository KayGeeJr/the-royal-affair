/**
 * Prefix a path with Vite `import.meta.env.BASE_URL` so assets and links work
 * when the app is served from a subpath (e.g. GitHub Pages project sites).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL
  const trimmed = path.replace(/^\/+/, '')
  return `${base}${trimmed}`
}

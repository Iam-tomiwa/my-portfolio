/**
 * One place that knows where the site lives. Canonical URLs, the sitemap,
 * robots.txt and Open Graph image URLs all resolve against this.
 *
 * Set NEXT_PUBLIC_SITE_URL to the production domain. On Vercel,
 * VERCEL_PROJECT_PRODUCTION_URL is injected automatically and resolves to the
 * project's production domain, so deployments are correct without extra config.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

/** Absolute URL for a site-relative path, e.g. absoluteUrl("/research"). */
export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export const siteName = "Ajayi Emmanuel Tomiwa";

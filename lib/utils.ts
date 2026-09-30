export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** True once the owner has replaced the placeholder LinkedIn handle. */
export function isConfigured(url: string): boolean {
  return url.trim().length > 0 && !url.includes("YOUR-USERNAME");
}

/** Fills `{name}` placeholders in a dictionary string. Kept dependency-free so the client bundle stays small. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

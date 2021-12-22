export default function applyClasses(
  baseClass = "",
  ...appliables: string[]
): string {
  return baseClass.split(" ").concat(appliables).join(" ");
}

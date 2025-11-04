export function parseLaunchOptions(options = {}) {
  const q = options.q ? decodeURIComponent(options.q) : '';
  const scene = options.scene ? decodeURIComponent(options.scene) : '';
  return { q, scene, query: options };
}

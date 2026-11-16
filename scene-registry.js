export const scenes = Object.freeze([
  { id: 'ashford-vale', name: 'Ashford Vale', perspective: 'side-on', environment: 'rural railway', weatherAware: true },
  { id: 'westbrook-cutting', name: 'Westbrook Cutting', perspective: 'top-down', environment: 'cutting', weatherAware: true },
  { id: 'north-fen-yard', name: 'North Fen Yard', perspective: 'top-down', environment: 'maintenance depot', weatherAware: false },
  { id: 'merefield-tunnel', name: 'Merefield Tunnel', perspective: 'side-on', environment: 'tunnel', weatherAware: true },
  { id: 'river-stour-bridge', name: 'River Stour Bridge', perspective: 'side-on', environment: 'bridge', weatherAware: true },
  { id: 'eldemere-control', name: 'Eldermere Control Room', perspective: 'top-down', environment: 'control room', weatherAware: false }
]);

export function sceneForLocation(location) {
  const key = String(location).toLowerCase();
  return scenes.find(scene => key.includes(scene.name.toLowerCase())) || scenes[0];
}

import { weatherTypes } from '../data/content.js';

export function currentWeather(index) {
  return weatherTypes[((index % weatherTypes.length) + weatherTypes.length) % weatherTypes.length];
}

export function advanceWeather(index, step = 1) {
  return (index + step + weatherTypes.length) % weatherTypes.length;
}

export function weatherDifficulty(index) {
  const name = currentWeather(index).name;
  return ({ Clear: 0, 'Light rain': 1, 'Heavy rain': 2, Fog: 3, Snow: 2, Windy: 1, Frost: 2, 'Autumn leaves': 2 })[name] ?? 0;
}

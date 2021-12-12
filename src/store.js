import { writable, derived } from 'svelte/store';
import { formatTemperature } from "./utils";

export const weather = writable([]);
export const atmosphericTemperatures = derived(
  weather,
  $weather => $weather.map(({ AT }) => AT)
);
export const atmosphericPressures = derived(
  weather,
  $weather => $weather.map(({ PRE }) => PRE)
);
export const sols = derived(
  weather,
  $weather => $weather.map(({ sol }) => sol)
);
export const today = derived(
  weather,
  $weather => $weather[0]
);
export const todayOnEarth = derived(
  today,
  $today => {
    if ($today) {
      const date = new Date($today?.First_UTC);
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDay();
      return `${month} ${day}`;
    }
    return '';
  }
);
export const todayOnMars = derived(
  today,
  $today => $today ? `Sol ${$today?.sol}` : ''
);
export const todayAverageTemperature = derived(
  today,
  $today => $today ? formatTemperature($today?.AT.av) : '--'
);
export const todayMinTemperature = derived(
  today,
  $today => $today ? `Min: ${formatTemperature($today?.AT.mn)}` : ''
);
export const todayMaxTemperature = derived(
  today,
  $today => $today ? `Max: ${formatTemperature($today?.AT.mx)}` : ''
);


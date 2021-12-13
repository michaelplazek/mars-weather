import { writable, derived } from "svelte/store";
import {
  formatPressure,
  formatTemperature,
  formatWind,
  getSeasonIcon,
} from "./utils";

export const weather = writable([]);

export const atmosphericTemperatures = derived(weather, ($weather) =>
  $weather.map(({ AT }) => AT)
);
export const atmosphericPressures = derived(weather, ($weather) =>
  $weather.map(({ PRE }) => PRE)
);
export const sols = derived(weather, ($weather) =>
  $weather.map(({ sol }) => sol)
);
export const today = derived(weather, ($weather) => $weather[0]);
export const season = derived(today, ($today) => {
  const season = $today?.Season;
  return season && season.charAt(0).toUpperCase() + season.slice(1);
});
export const seasonIcon = derived(today, ($today) => {
  const season = $today?.Season;
  return season && getSeasonIcon(season);
});
export const todayOnEarth = derived(today, ($today) => {
  if ($today) {
    const date = new Date($today?.First_UTC);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDay();
    return `${month} ${day}`;
  }
  return "";
});
export const todayOnMars = derived(today, ($today) =>
  $today ? `Sol ${$today?.sol}` : ""
);

export const todayAverageTemperature = derived(today, ($today) =>
  $today ? formatTemperature($today?.AT.av) : "--"
);
export const todayMinTemperature = derived(today, ($today) =>
  $today ? `Min: ${formatTemperature($today?.AT.mn)}` : ""
);
export const todayMaxTemperature = derived(today, ($today) =>
  $today ? `Max: ${formatTemperature($today?.AT.mx)}` : ""
);

export const todayAveragePressure = derived(today, ($today) =>
  $today ? formatPressure($today?.PRE.av) : "--"
);
export const todayMinPressure = derived(today, ($today) =>
  $today ? `Min: ${formatPressure($today?.PRE.mn)}` : ""
);
export const todayMaxPressure = derived(today, ($today) =>
  $today ? `Max: ${formatPressure($today?.PRE.mx)}` : ""
);

export const todayAverageWind = derived(today, ($today) =>
  $today ? formatWind($today?.HWS.av) : "--"
);
export const todayMinWind = derived(today, ($today) =>
  $today ? `Min: ${formatWind($today?.HWS.mn)}` : ""
);
export const todayMaxWind = derived(today, ($today) =>
  $today ? `Max: ${formatWind($today?.HWS.mx)}` : ""
);
export const todayWindDirection = derived(today, ($today) =>
  $today ? $today?.WD.most_common.compass_point : ""
);

export const historicalTemperatures = derived(weather, ($weather) =>
  $weather.reduce(
    (accum, { sol, AT }) => ({
      labels: [...accum.labels, sol],
      datasets: [
        {
          values: [...accum.datasets[0].values, AT.av],
        },
      ],
    }),
    { labels: [], datasets: [{ values: [] }] }
  )
);

export const historicalPressures = derived(weather, ($weather) =>
  $weather.reduce(
    (accum, { sol, PRE }) => ({
      labels: [...accum.labels, sol],
      datasets: [
        {
          values: [...accum.datasets[0].values, PRE.av],
        },
      ],
    }),
    { labels: [], datasets: [{ values: [] }] }
  )
);

export const historicalWindSpeeds = derived(weather, ($weather) =>
  $weather.reduce(
    (accum, { sol, HWS }) => ({
      labels: [...accum.labels, sol],
      datasets: [
        {
          values: [...accum.datasets[0].values, HWS.av],
        },
      ],
    }),
    { labels: [], datasets: [{ values: [] }] }
  )
);

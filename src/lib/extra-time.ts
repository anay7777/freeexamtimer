import { fmt } from '../i18n/fmt';

/** Common writing-time durations (in minutes) listed in the +25% extra time reference table. */
export const EXTRA_TIME_DURATIONS = [30, 45, 60, 75, 90, 120, 150, 180];

interface DurationUnits {
  hours: string;
  minutes: string;
  seconds: string;
}

export function formatDuration(totalSeconds: number, units: DurationUnits): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const parts: string[] = [];
  if (h) parts.push(fmt(units.hours, { n: h }));
  if (m) parts.push(fmt(units.minutes, { n: m }));
  if (s) parts.push(fmt(units.seconds, { n: s }));
  return parts.join(' ');
}

/** Same rounding as the on-screen "+25% Finish" clock in `ExamEngine`. */
export function extraTimeRows(units: DurationUnits) {
  return EXTRA_TIME_DURATIONS.map((minutes) => {
    const base = minutes * 60;
    const extra = Math.round(base * 0.25);
    return {
      standard: formatDuration(base, units),
      extra: formatDuration(extra, units),
      total: formatDuration(base + extra, units),
    };
  });
}

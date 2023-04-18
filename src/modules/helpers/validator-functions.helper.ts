import { DateTime } from 'luxon';

export function isNullOrEmpty(value: any): boolean {
  return !(typeof value === 'string' && value.trim().length > 0);
}

export function convertToDateTime(date: Date): DateTime {
  return DateTime.fromJSDate(date);
}

export function convertStartDateToDateTime(date: Date): DateTime {
  return DateTime.fromISO(new Date(date).toISOString(), {
    zone: 'America/Sao_Paulo',
  }).startOf('day');
}

export function convertEndDateToDateTime(date: Date): DateTime {
  return DateTime.fromISO(new Date(date).toISOString(), {
    zone: 'America/Sao_Paulo',
  }).endOf('day');
}

export function getEndOfDay(): DateTime {
  return DateTime.fromISO(new Date().toISOString(), {
    zone: 'America/Sao_Paulo',
  }).endOf('day');
}

export function getStartOfDay(): DateTime {
  return DateTime.fromISO(new Date().toISOString(), {
    zone: 'America/Sao_Paulo',
  }).startOf('day');
}

export function getCurrentDateTime(): DateTime {
  return DateTime.utc().setZone('America/Sao_Paulo');
}

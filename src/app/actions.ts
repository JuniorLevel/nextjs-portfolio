'use server';

import { cookies } from 'next/headers';

export async function updateCookiesValue(data: string) {
  const cookieStore = await cookies();
  cookieStore.set('theme', data, { priority: 'high', maxAge: 1000000 });
}

export async function getCookiesValue(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key);
}

export async function getCoinsData(url: string) {
  const options: any = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_COINSTATS_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {}
}

export async function getCoinHistoryData(url: string) {
  const options: any = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_COINSTATS_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {}
}

export async function getExchangesList(url: string) {
  const options: any = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_COINSTATS_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {}
}

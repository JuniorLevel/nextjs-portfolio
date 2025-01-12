'use server';

import { RequestOptions } from 'interfaces/interfaces';
import { cookies } from 'next/headers';

const cache: Record<string, any> = {};

export async function updateCookiesValue(data: string) {
  const cookieStore = await cookies();
  cookieStore.set('theme', data, { priority: 'high', maxAge: 1000000 });
}

export async function getCookiesValue(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key);
}

async function fetchApi(url: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_COINSTATS_API_KEY,
    },
  } as RequestOptions;

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export async function getAppData(url: string) {
  if (cache[url]) {
    return cache[url];
  }

  const result = await fetchApi(url);
  cache[url] = result;
  return result;
}

'use server';

import { cookies } from 'next/headers';

export async function updateCookiesValue(data: string) {
  const cookieStore = await cookies();
  cookieStore.set('theme', data);
}

export async function getCookiesValue(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key);
}

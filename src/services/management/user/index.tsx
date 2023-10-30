import { request } from '@umijs/max';

export async function getUsers() {
  return request('/Users', { method: 'GET' });
}

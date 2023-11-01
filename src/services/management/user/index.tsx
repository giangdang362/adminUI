import { request } from '@umijs/max';

export async function getUsers() {
  return request('/Users', { method: 'GET' });
}

export async function putUser(id: number, payload: API.UserPayload) {
  console.log('id', id, payload);

  return request(`/Users/${id}`, {
    method: 'PUT',
    data: payload,
  });
}

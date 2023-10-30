import { request } from '@umijs/max';

interface ParamsGetIdol {
  idolType: number | null;
}

export async function getIdols(params: ParamsGetIdol) {
  return request('/Idols', {
    method: 'GET',
    params: params,
  });
}

export async function deleteIdol(id: string) {
  return request(`/Idols/${id}`, {
    method: 'DELETE',
  });
}

export async function postIdol(params: API.IdolItem) {
  return request('/Idols', {
    method: 'POST',
    params: params,
  });
}

export async function putIdol(id: string) {
  return request(`/Idols/${id}`, {
    method: 'PUT',
  });
}

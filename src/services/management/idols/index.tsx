import { request } from '@umijs/max';

interface PramsGetIdol {
  idolType: number | null;
}

export async function getIdol(params: PramsGetIdol) {
  return request('/Idols', {
    method: 'GET',
    params: params,
  });
}

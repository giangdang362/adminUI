import { request } from '@umijs/max';

interface ParamsGetVote {
  voteType: number | null;
}

export async function getVote(params: ParamsGetVote) {
  return request('/Votes', {
    method: 'GET',
    params: params,
  });
}

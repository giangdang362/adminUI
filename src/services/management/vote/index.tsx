import { request } from '@umijs/max';

interface ParamsGetVote {
  voteType: number | null;
}

export async function getVote(params: ParamsGetVote): Promise<API.VoteItem[]> {
  return request('/Votes', {
    method: 'GET',
    params: params,
  });
}

export async function deleteVote(id: number) {
  return request(`/Votes/${id}`, {
    method: 'DELETE',
  });
}

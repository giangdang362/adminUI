// @ts-ignore
/* eslint-disable */

declare namespace API {
  type VoteItem = {
    voteId?: number;
    voteName?: string;
    startDate?: string;
    endDate?: string;
    reward?: string;
    goalPoint?: number;
    idolVote?: string;
    vote?: number;
    status?: string;
    voteContent?: string;
    voteTypeId?: number;
    bannerUrl?: string;
    idolsName?: string[];
    idolIds?: number[];
    requsetDate?: string;
    community?: string;
  };

  type VotePayload = {
    voteName?: string;
    voteTypeId?: number;
    startDate?: string;
    endDate?: string;
    bannerFileName?: string;
    voteContent?: string;
    goalPoint?: number;
    reward?: string;
    idolIds?: number[];
  };
}

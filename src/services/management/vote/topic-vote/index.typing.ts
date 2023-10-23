declare namespace API {
  type TopicVoteItem = {
    topicName?: string;
    startDate?: string;
    endDate?: string;
    idolVote?: MemberItem[];
    status?: number;
  };
}

declare namespace API {
  type User = {
    id?: number;
    userName?: string;
    userEmail?: string;
    avatarUrl?: string;
    honeyPoint?: number;
    isActive?: true;
    startDate?: string;
    lastLoginDate?: string;
    idolFollows?: API.IdolItem[];
    jwtToken?: string;
    refreshToken?: string;
  };
}

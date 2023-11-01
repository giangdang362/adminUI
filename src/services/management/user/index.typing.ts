declare namespace API {
  type User = {
    id?: number;
    userName?: string;
    userEmail?: string;
    avatarFileName?: string;
    honeyPoint?: number;
    isActive?: number;
    startDate?: string;
    lastLoginDate?: string;
    idolFollows?: API.IdolItem[];
    jwtToken?: string;
    refreshToken?: string;
    password?: string;
  };

  type UserPayload = {
    email?: string;
    password?: string;
  };
}

// @ts-ignore
/* eslint-disable */

declare namespace API {
  type Login = {
    email?: string;
    password?: string;
  };
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

  type UserStorage = {
    id?: number;
    userName?: string;
    userEmail?: string;
    avatarUrl?: string;
    honeyPoint?: number;
  };

  type RefreshJwtToken = {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    additionalProp1?: string;
    additionalProp2?: string;
    additionalProp3?: string;
  };
}

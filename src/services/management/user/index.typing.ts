declare namespace API {
  type UserItem = {
    id?: string;
    userName?: string;
    lastLoginDate?: string;
    point?: number;
    idolFollow?: MemberItem[];
    status?: number;
    email?: string;
    password?: string;
  };
}

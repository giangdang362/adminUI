declare namespace API {
  type IdolsItem = {
    id?: string;
    idolName?: string;
    birthday?: string;
    members?: MemberItem[];
    type?: number;
  };

  export type MemberItem = {
    id: number;
    name: string;
  };
}

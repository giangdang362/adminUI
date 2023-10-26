declare namespace API {
  type IdolItem = {
    id?: string;
    idolName?: string;
    anniversaryDay?: string;
    members?: IdolItem[];
    idolType?: string;
    avatarUrl?: string;
    bannerUrl?: string;
    groupId?: number;
  };
}

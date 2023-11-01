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

  type IdolPayload = {
    idolTypeId?: number;
    avatarFileName?: string;
    bannerFileName?: string;
    idolName?: string;
    anniversaryDay?: string;
  };
}

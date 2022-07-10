export type Sample = {
  tagNo: string;
  name: string;
  mobileNo: string;
  socialId: string;
  idType: string;
  c: boolean;
  igM: boolean;
  igG: boolean;
  cC: boolean;
  ns1Ag: boolean;
  interpretation: string;
  samplePhotoDataUri: string | null;
  // createAt: string;
  // testAt: string;
  // readAt: string;
};

export type Patient = {
  idType: string;
  name: string;
  socialId: string;
  mobileNo: string;
};

export type Photo = {
  tagNo: string;
  dataUri: string;
};

export interface Sample {
  tagNo: string;
  name: string; // patient name
  mobileNo: string;
  socialId: string;
  idType: string;
  samplePhotoDataUri: string | null;
  pending: boolean;
  // createAt: string;
  // testAt: string;
  // readAt: string;
}

export interface Sample {
  testType: string;
  tagNo: string;
  name: string | null; // patient name
  mobileNo: string;
  socialId: string;
  idType: string;
  samplePhotoDataUri: string | null;
  pending: boolean;
  // createAt: string;
  // testAt: string;
  // readAt: string;
}

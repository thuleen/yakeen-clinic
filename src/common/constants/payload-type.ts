export interface Sample {
  testType: string;
  tagNo: string;
  name: string | null; // patient name
  mobileNo: string;
  socialId: string;
  idType: string;
  samplePhotoDataUri: string | null;
  pending: boolean;
  lastActiveStep: number;
  createAt: string;
  interpretAt: string;
  photoTakenAt: string; // date time photo was taken
  shareLink: string;
}

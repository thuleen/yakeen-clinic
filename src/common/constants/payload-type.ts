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

export interface ResponseError {
  errMsg: string;
}

export interface Register {
  name: string;
  address: string;
  postcode: string;
  email: email;
}

export interface ResponseError extends ResponseError {}

export interface Login {
  clinicId: string;
  password: string;
}

export interface LoginOk {
  token: string;
}

export interface SampleSelection {
  tagNo: string;
}

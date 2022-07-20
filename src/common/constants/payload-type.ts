export interface Initialize {
  password: string;
}

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

export interface RegisterErr {
  errMsg: string;
}

export interface RegisterOK {
  okMsg: string;
}

export interface Register {
  name: string;
  address: string;
  postcode: string;
  email: string;
}

export interface Login {
  clinicId: string;
  password: string;
}

export interface LoginOK {
  token: string;
}

export interface SampleSelection {
  tagNo: string;
}

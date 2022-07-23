export interface Initialize {
  password: string;
}

export interface Sample {
  id?: number; // generated at API level
  testType: string;
  tagNo: string;
  name: string | null; // patient name
  mobileNo: string;
  socialId: string;
  idType: string;
  photoUri: string | null;
  pending: boolean;
  lastActiveStep: number;
  createdAt: string;
  interpretedAt: string;
  photoTakenAt: string; // date time photo was taken
  shareLink: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  postcode: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginOK {
  okMsg: string;
  clinic: Clinic | null;
}

export interface LoginErr {
  errMsg: string;
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

export interface SampleSelection {
  tagNo: string;
}

export interface SampleCreation {
  lastActiveStep: number;
  clinicId: number;
  tagNo: string;
  testType: string;
}

export interface UpdateSamplePhoto extends SampleCreation {}
export interface UpdateSamplePatient extends SampleCreation {}

export interface GetSamples {
  clinicId: number;
}
export interface GetSamplesOK {
  samples: Sample[];
}

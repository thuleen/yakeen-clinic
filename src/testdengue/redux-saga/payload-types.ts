type Sample = {
  tagNo: string;
  patientName: string;
  patientMobileNo: string;
  patientSocialId: string;
  c: boolean;
  igM: boolean;
  igG: boolean;
  cC: boolean;
  ns1Ag: boolean;
  interpretation: string;
  samplePhotoDataUri: string;
};
export { Sample };

type Patient = {
  idType: string;
  name: string;
  socialId: string;
  mobileNo: string;
};

type Photo = {
  tagNo: string;
  dataUri: string;
};

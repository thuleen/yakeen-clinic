import QRCode from "qrcode.react";

type QrcodeProps = {
  shareLink: string;
};

const Qrcode = (props: QrcodeProps) => {
  const { shareLink } = props;
  return (
    <QRCode
      fgColor="#079992"
      renderAs="svg"
      size={255}
      value={shareLink}
    />
  );
};
export default Qrcode;

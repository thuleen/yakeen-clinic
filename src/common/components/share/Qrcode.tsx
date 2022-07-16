import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type QrcodeProps = {
  shareLink: string;
};

const Qrcode = (props: QrcodeProps) => {
  const { shareLink } = props;
  const [copied, setCopied] = React.useState<boolean>(false);
  return (
    <div style={{ marginTop: "1rem" }}>
      <QRCode fgColor="#079992" renderAs="svg" size={255} value={shareLink} />
      <CopyToClipboard text={shareLink} onCopy={() => setCopied(!copied)}>
        {copied ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "55px",
              marginTop: "1rem",
            }}
          >
            <Typography variant="caption">{shareLink}</Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" color="primary">
                Copied!
              </Typography>
              <DoneIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "55px",
            }}
          >
            <Typography variant="caption">{shareLink}</Typography>
            <Typography variant="body2" color="primary">
              COPY LINK
            </Typography>
          </div>
        )}
      </CopyToClipboard>
    </div>
  );
};
export default Qrcode;

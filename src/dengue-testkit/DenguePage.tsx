import React from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { DengueState } from "../store";
import StepsForm from "./forms/StepsForm";
import { DengueSample } from "./redux-saga/payload-type";
import { logout, backStep } from "../common/redux-saga/actions";
import Qrcode from "../common/components/share/Qrcode";

type DenguePageProps = {
  sample?: DengueSample;
};

const DenguePage = (props: DenguePageProps) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  const [openShare, setOpenShare] = React.useState<boolean>(false);

  const { activeSample } = useSelector((state: DengueState) => state.dengue);
  const onBack = (sample: DengueSample) => dispatch(backStep(sample));

  if (!activeSample) {
    return (
      <div>
        <div>No sample created</div>
      </div>
    );
  }

  const handleBack = () => {
    onBack(activeSample);
  };

  const toggleShare = () => {
    setOpenShare((old) => !old);
  };

  return (
    <div>
      <StepsForm
        sample={activeSample}
        handleBack={handleBack}
        toggleShare={toggleShare}
      />
      <Drawer anchor="bottom" open={openShare} onClose={toggleShare}>
        <div
          style={{
            width: "100%",
            height: "395px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Qrcode shareLink={activeSample.shareLink} />
        </div>
      </Drawer>
    </div>
  );
};
export default DenguePage;

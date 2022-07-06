import { takeLatest, all } from "redux-saga/effects";
// import * as WALLET_ACTIONS from "./wallet/actions";
// import * as WALLET_SAGA from "./wallet/saga";
// import * as NFT_ACTIONS from "./nft/actions";

function* actionWatcher() {
  // yield takeLatest(WALLET_ACTIONS.INIT, WALLET_SAGA.init);
  // yield takeLatest(WALLET_ACTIONS.RENEW, WALLET_SAGA.renew);
  // yield takeLatest(WALLET_ACTIONS.REQUEST_OTP, WALLET_SAGA.requestOtp);
  // yield takeLatest(WALLET_ACTIONS.REGISTER, WALLET_SAGA.register);
  // yield takeLatest(WALLET_ACTIONS.RESTORE, WALLET_SAGA.restore);
  // yield takeLatest(NFT_ACTIONS.CONNECT_SOCKET, NFT_SAGA.connectSocket);
  // yield takeLatest(NFT_ACTIONS.DISCONNECT_SOCKET, NFT_SAGA.disconnectSocket);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

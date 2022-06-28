import MenuAppBar from "../components/appbar";
import PatientContainer from "./transaction";
import TransactionsList from "./transaction/history"


type TransactionsPageProps = {
   toggleHome: () =>  void;
}

const TransactionsPage = ( props: TransactionsPageProps) => {
const { toggleHome } = props;
  return (
    <>
      <MenuAppBar handleNew={toggleHome} />
      <TransactionsList />
    </>
  );
};

export default TransactionsPage;

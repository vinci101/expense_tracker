import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  // console.log(transactions);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${amounts}</h1>
    </>
  );
};

export default Balance;

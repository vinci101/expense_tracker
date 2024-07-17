import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

/* eslint-disable react/prop-types */
const Transaction = ({ transaction }) => {
  // const { deleteTrans } = useContext(GlobalContext);
  const { deleteTrans } = useContext(GlobalContext);
  const sign = transaction.amount >= 0 ? "+" : "-";

  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTrans(transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

export default Transaction;

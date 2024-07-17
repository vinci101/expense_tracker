import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import Income from "./components/Income";
import TransactionList from "./components/TransactionList";
import AddTrans from "./components/AddTrans";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
};

export default App;

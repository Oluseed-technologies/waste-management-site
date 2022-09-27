import { motion } from "framer-motion";
import { Header } from "../Header";
import card2 from "../../../assets/card2.png";
import card1 from "../../../assets/card1.png";
import copy from "../../../assets/copy.png";
const Wallet = () => {
  const arr = new Array(2).fill(0);
  const renderTransactions = arr.map((data, index) => {
    return (
      <div
        className={`${
          index === 0 ? "bg-primary" : "bg-secondary"
        } my-3 font-mono w-full md:w-96 py-8 px-6 rounded-3xl text-white font-bold `}
      >
        <div>
          <h2>Total Balance</h2>
        </div>
        <div className="flex my-10 items-center justify-between">
          <p>4500</p>
          <p>2000</p>
          <p>2350</p>
          <p>7270</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl">#66,000</p>
          <span>
            <img src={index === 0 ? card2 : card1} alt="card" />
          </span>
        </div>
      </div>
    );
  });
  const arr2 = new Array(6).fill(0);
  const renderTransactionsDetails = arr2.map((data, index) => {
    return (
      <div
        style={{ color: "#18191F", letterSpacing: "0.1rem" }}
        className="block border-b-2 py-2 md:flex my-5 justify-between md:text-base text-sm font-bold items-center"
      >
        <h3 className="my-3 md:hidden text-primary">AMOUNT</h3>
        <p>₦400,000</p>
        <p>
          <h3 className="my-3 md:hidden text-secondary">TRANSACTION ID</h3>
          <div className="flex items-center">
            MNF123459239W{" "}
            <span style={{ cursor: "pointer" }} className="mx-2">
              <img src={copy} alt="copy" />{" "}
            </span>
          </div>
        </p>
        <h3 className="my-3 md:hidden text-secondary">PAYMENY METHOD</h3>
        <p>Account Transfer</p>
        <h3 className="my-3 md:hidden text-primary">DATE/TIME</h3>
        <p>Yesterday</p>
        <h3 className="my-3 md:hidden text-secondary">STATUS</h3>
        <p>Failed</p>
      </div>
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=" mx-4 md:ml-72 md:mr-10 my-1"
    >
      <Header />
      <div className="md:flex justify-between items-center">
        {renderTransactions}
      </div>
      <div
        style={{ color: " #A6A6A6" }}
        className="md:flex hidden my-6 font-bold font-mono justify-between items-center"
      >
        <h3>AMOUNT</h3>
        <h3>TRANSACTION ID</h3>
        <h3>PAYMENT METHOD</h3>
        <h3>DATE/TIME</h3>
        <h3>STATUS</h3>
      </div>
      <div className="md:block grid grid-cols-2">
        {renderTransactionsDetails}
      </div>
    </motion.div>
  );
};
export default Wallet;

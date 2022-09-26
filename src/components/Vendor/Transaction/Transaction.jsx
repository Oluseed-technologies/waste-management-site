import { Header } from "../Header";
import Footer from "../../../components/common/Footer/Footer";
import { motion } from "framer-motion";
const Transaction = () => {
  const arr = new Array(6).fill(0);
  const renderUsers = arr.map((data) => {
    return (
      <ul
        style={{ background: "#F1EFEF" }}
        className=" flex justify-between  items-center p-6 shadow-md rounded-md my-5 border-solid "
      >
        <li>21 - 05 - 2019</li>
        <li>09030294024</li>

        <li>25,000 </li>
      </ul>
    );
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:ml-72 md:mr-10 my-10"
      >
        <Header />
        <ul className="flex text-primary text-sm  md:text-xl font-bold justify-between items-center">
          <li>DATE</li>
          <li>PHONE NUMBER</li>
          <li>AMOUNT SPENT (N)</li>
        </ul>
        {renderUsers}
      </motion.div>
      <div className="block md:hidden">
        <Footer />
      </div>
    </>
  );
};
export default Transaction;

import { motion } from "framer-motion";
import { Header } from "../Header";
const Wallet = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=" mx-4 md:ml-72 md:mr-10 my-1"
    >
      <Header />
    </motion.div>
  );
};
export default Wallet;

import Header from "../../pages/Home/Header";
import Companies from "../../pages/Home/Companies";
import { motion } from "framer-motion";
const ManageWaste = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ background: "rgba(60, 170, 53, 0.1)" }}
      //   className="z-4 bg-blue-400"
    >
      <Header />
      <Companies />
    </motion.div>
  );
};
export default ManageWaste;

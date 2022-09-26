import img1 from "../../../assets/img5.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
const Companies = () => {
  const arrs = new Array(8).fill(0);
  const navigate = useNavigate();
  const renderCompanies = arrs.map((data, index) => {
    return (
      <motion.div
        initial={{
          opacity: 0,
          transform: `${
            index % 2 === 0 ? "translateX(-20rem)" : "translateX(20rem)"
          } `,
        }}
        whileInView={{
          opacity: 1,
          transform: " translateX(0rem)",
        }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/manage-waste/company-${index}`)}
        className="flex  md:w-48 w-72 mx-2 shadow-md rounded-md md:flex-col my-3"
      >
        <img src={img1} className="md:w-auto w-36" alt="company1" />
        <div className="bg-white p-3">
          <div className="text-primary-100 text-xs flex font-bold">
            <p>Olaoluwa Waste Management</p>
            <p className="text-secondary">2500</p>
          </div>
          <p className="text-xss">No. 9 Under G Area, Lagos, Nigeria.</p>
          <p className="text-xs text-primary-100">ratings</p>
        </div>
      </motion.div>
    );
  });
  //   console.log(arrs);
  return (
    <>
      <div
        style={{ background: " rgba(60, 170, 53, 0.1" }}
        className="px-2 md:px-64  py-24"
      >
        <ScrollAnimation animateIn="animate__bounceIn">
          <h1 className="text-3xl text-center font-bold">
            Our Waste Management Company
          </h1>
          <p className="font-light text-center text-sm my-5 text-dark2">
            Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
            aliquip duis aute irure dolorin reprehenderits vol dolore fugiat
            nulla pariatur excepteur sint occaecat cupidatat.
          </p>
        </ScrollAnimation>

        <div className="text-start">
          <div className="flex md:justify-between justify-center my-5 flex-wrap">
            {renderCompanies}
          </div>
          <div className="btn flex justify-center">
            <button className="bg-primary font-mont text-white w-56 rounded-md py-1">
              See more...
            </button>
          </div>{" "}
        </div>
      </div>
      ;
    </>
  );
};
export default Companies;

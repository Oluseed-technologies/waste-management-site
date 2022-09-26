import person from "../../../assets/person1.png";
import { motion } from "framer-motion";
const arr = new Array(6).fill(0);
const renderTeams = arr.map((data, index) => {
  console.log(index % 2);
  return (
    <motion.div
    // key={index}
    // initial={{
    //   opacity: 0,
    //   transform: `${
    //     index % 2 === 0 ? "translateX(-20rem)" : "translateX(20rem)"
    //   } `,
    // }}
    // whileInView={{
    //   opacity: 1,
    //   transform: " translateX(0rem)",
    // }}
    // viewport={{ once: false }}
    // transition={{ duration: 0.5 }}
    >
      <div className="flex w-36  md:w-48 justify-center items-center m-3 flex-col">
        <img src={person} alt="team image" />
        <h2 className="font-bold">Music Director</h2>
        <h3 className="text-primary font-bold">John Doe</h3>
      </div>
    </motion.div>
  );
});
const OurTeam = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl my-10 font-bold">Meet Our Team</h1>
        <div className="flex flex-wrap px-2 md:px-64 justify-between">
          {renderTeams}
        </div>
      </div>
    </>
  );
};
export default OurTeam;

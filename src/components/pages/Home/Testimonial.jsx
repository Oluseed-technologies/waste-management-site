import people from "../../../assets/people.png";
import colon from "../../../assets/colon.png";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <>
      <div className="testimonial block md:flex justify-between  items-center  ">
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-20rem)",
          }}
          whileInView={{
            opacity: 1,
            transform: " translateX(0rem)",
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className=""
        >
          <h1 className="text-primary flex items-center">
            <span className="w-8 mr-3  bg-primary h-0.5"></span>
            Testimonials
          </h1>
          <p className="md:text-3xl text-xl font-medium my-7">
            What Our Customer Say
          </p>
          <div className="flex">
            <span className="mx-3">
              <img src={colon} className="w-16" alt="colon" />
            </span>
            <div className="my-3 max-w-4xl">
              <p className="md:text-md text-sm">
                Design is a way of life, a point of view. It involves the whole
                complex of visual communications: talent, creative ability,
                manual skill, and technical knowledge.
              </p>
              <h2 className="font-semibold my-3">Ralph Edwards</h2>
              <p className="font-ligth text-xs my-3">Product Designer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(20rem)",
          }}
          whileInView={{
            opacity: 1,
            transform: " translateX(0rem)",
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <img src={people} alt="peole" />
        </motion.div>
      </div>
    </>
  );
};
export default Testimonial;

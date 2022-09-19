import AboutImage from "../../../assets/About.png";
import dot from "../../../assets/dot.png";
const About = () => {
  return (
    <>
      <div className=" block md:flex  justify-between">
        <div className="img w-auto relative">
          <img src={AboutImage} className="w-auto" alt="about" />
          <span
            style={{ bottom: "-3rem", left: "-3rem", zIndex: "-3" }}
            className="absolute "
          >
            <img src={dot} alt="dot" />
          </span>
        </div>
        <div className="about-text flex max-w-sm  mx-5 justify-between flex-col">
          <h3 className="text-secondary">About Us</h3>
          <p className="text-3xl font-bold">
            we make thing smart for you with tech.
          </p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
            risus elit pellentesque nec sed vel proin rutrum orci. Lobortis nunc
            varius massa convallis. Id in feugiat lobortis amet, quisque et ut
            vestibulum, aenean. Ultrices risus netus donec arcu. Pellentesque
            mauris id volutpat quam sodales nunc turpis interdum donec. Viverra
            nulla morbi
          </p>
          <div className="shadow-md p-5 rounded-md my-2">
            <h4 className="text-xl text-dark1 font-medium">20 Company</h4>
          </div>
          <div className="shadow-md p-5 rounded-md my-2">
            <h4 className="text-xl text-dark1 font-medium">100 User</h4>
          </div>
          <div className="shadow-md p-5 rounded-md my-2">
            <h4 className="text-xl text-dark1 font-medium">150 State Cover</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

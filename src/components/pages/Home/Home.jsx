import tractor from "../../../assets/tractor1.png";
import tick from "../../../assets/tick.png";
import pickUp from "./pickup.json";
import Companies from "./Companies";
import About from "./About";
import Testimonial from "./Testimonial";
import OurApp from "./OurApp";
const Home = () => {
  const renderPickups = pickUp.map((data) => {
    return (
      <div className="flex flex-col ">
        <label className="text-dark1 text-sm font-semibold" htmlFor={data.name}>
          {data.name}
        </label>
        <select
          className="text-gray-600 border-solid border-2 rounded-md my-2 px-3 py-2 border-gray-100 text-sm"
          name="type"
        >
          {data.options.map((option) => {
            return <option value="waste type">{option}</option>;
          })}
        </select>
      </div>
    );
  });
  return (
    <>
      <div className="block md:flex justify-between pl-4 pr-4  md:pl-64 my-10 md:pr-20">
        <section className="shadow-lg text-lg p-7 max-h-fit">
          <h2 className="font-bold">Schedule a pickup</h2>
          <p className="my-3 text-sm text-gray-600  font-rubik">
            Dispose your waste throuh hygenic means
          </p>
          {renderPickups}
        </section>
        <section className="max-h-48">
          <img src={tractor} alt="tractor" />
        </section>
      </div>
      <div className="flex flex-col mx-auto  my-24 justify-center  items-center">
        <h2 className="my-4 ">Manage Your Waste</h2>
        <div className=" font-bold text-4xl">Quick & easy Waste Management</div>
        {/* Manage Waste */}
        <div className="block md:flex justify-between   md:px-64 px-4 my-8 items-center">
          <div className="">
            <h2 className="font-semibold">Search Location</h2>
            <p className="font-light text-sm my-5 text-dark2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
          <div className="">
            <h2 className="font-semibold">Search Location</h2>
            <p className="font-light text-sm my-5 text-dark2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
          <div className="">
            <h2 className="font-semibold">Search Location</h2>
            <p className="font-light text-sm my-5 text-dark2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        </div>

        {/* Companies */}
        <div
          style={{ background: " rgba(60, 170, 53, 0.1" }}
          className="px-64 py-24"
        >
          <h1 className="text-3xl font-bold">Our Waste Management Company</h1>
          <p className="font-light text-sm my-5 text-dark2">
            Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
            aliquip duis aute irure dolorin reprehenderits vol dolore fugiat
            nulla pariatur excepteur sint occaecat cupidatat.
          </p>
          <div className="text-start">
            <Companies />
          </div>
        </div>
        {/* About Us */}
        <div className="md:px-64 px-4 text-start py-24">
          <About />
        </div>
      </div>
      <div className="tractor-bg flex flex-col items-center justify-center  py-16">
        {/* <h1>hello</h1> */}
        <p className="text-white text-center text-4xl">
          Let pick your waste at <br /> your door step
        </p>
        <button className="w-52 flex items-center justify-center bg-primary rounded-md my-2 py-2 text-white">
          Schedule a pickup{" "}
          <span className="ml-1">
            <img src={tick} alt="tick" />
          </span>
        </button>
      </div>
      <div className="md:px-64 px-4 text-start py-24">
        <Testimonial />
      </div>
      <div
        style={{ background: " rgba(60, 170, 53, 0.1" }}
        className="md:px-64 px-4 text-start py-24"
      >
        <OurApp />
      </div>
    </>
  );
};

export default Home;

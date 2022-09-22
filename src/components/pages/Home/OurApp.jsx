import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";
import phoneMap from "../../../assets/phone.png";
const OurApp = () => {
  return (
    <>
      <div
        style={{ overflow: "hidden" }}
        className="block relative md:flex justify-content"
      >
        <div className="md:pb-24 pb-8">
          <h1 className="md:text-3xl  text-center text-md text-dark2 font-semibold">
            Download our app to get most out of it
          </h1>
          <p className="text-dark3 hidden md:block  text-sm">
            Sed ut perspiciatis unde omnis iste natus <br /> error sit
            voluptatem accusantium doloremque <br /> laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore <br /> veritatis et quasi
            architecto beatae .
          </p>
          <div className="btns flex justify-center md:block my-4 md:my-0">
            <button className="w-36 ">
              <img src={ios} alt="ios" />
            </button>
            <button className="w-36">
              <img src={playstore} alt="playstore" />
            </button>
          </div>
        </div>
        <div className=" absolute -right-10 phone-map">
          <img src={phoneMap} className="w-56" alt="phone-map" />
        </div>
      </div>
    </>
  );
};
export default OurApp;

import ios from "../../../assets/ios.png";
import playstore from "../../../assets/playstore.png";
import phoneMap from "../../../assets/phone.png";
const OurApp = () => {
  return (
    <>
      <div className="block md:flex justify-content">
        <div className="">
          <h1 className="text-3xl text-dark2 font-semibold">
            Download our app to get most out of it
          </h1>
          <p className="text-dark3 text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae .
          </p>
          <div className="btns">
            <button className="w-36">
              <img src={ios} alt="ios" />
            </button>
            <button className="w-36">
              <img src={playstore} alt="playstore" />
            </button>
          </div>
        </div>
        <div className="phone-map">
          <img src={phoneMap} alt="phone-map" />
        </div>
      </div>
    </>
  );
};
export default OurApp;

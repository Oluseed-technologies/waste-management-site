import mobile from "../../../assets/DeviceMobile.png";
import flag from "../../../assets/flag.png";
import calendar from "../../../assets/CalendarBlank.png";
import card from "../../../assets/CreditCard.png";
import key from "../../../assets/key.png";
import SimilarCompanies from "./SimilarCompanies";
const Subscription = () => {
  return (
    <>
      <h1
        style={{ borderBottom: "2px solid #000000" }}
        className="text-primary-100 font-semibold py-3 font-mont text-xl  w-min mx-auto uppercase"
      >
        Subscription
      </h1>
      <div className="flex justify-center bg-light py-12">
        <div className="flex p-4  flex-col">
          <div className="relative ">
            <span className="absolute left-4  top-1/3">
              <img src={card} className="w-8" alt="mobile" />
            </span>
            <input
              type="number"
              className="bg-light-100 py-5 px-16 w-full px-3 my-3 text-dark5 rounded-md"
              placeholder="Card number"
            />
          </div>
          <div className="flex justify-between my-2">
            <div className="relative mr-5 ">
              <span className="absolute left-4  top-1/3">
                <img src={calendar} className="w-8" alt="mobile" />
              </span>
              <input
                type="text"
                className="bg-light-100 py-5 px-16 w-full px-3 my-3 text-dark5 rounded-md"
                placeholder="MM/ DD"
              />
            </div>
            <div className="relative ">
              <span className="absolute left-4  top-1/3">
                <img src={key} className="w-8" alt="mobile" />
              </span>
              <input
                type="number"
                className="bg-light-100 py-5 px-16 w-full px-3 my-3 text-dark5 rounded-md"
                placeholder="CVC"
              />
            </div>
          </div>
          <div className="flex my-2 items-center">
            <input
              type="checkbox"
              className="bg-light-100 py-3 px-3 rounded-md"
            />
            <p className="mx-2   text-dark5 ">Remember me</p>
          </div>
          <p className="text-dark5 py-5">
            For security,{" "}
            <span className="text-primary">
              {" "}
              please enter your phone number{" "}
            </span>
          </p>
          <div className="relative ">
            <span className="absolute left-4  top-1/3">
              <img src={mobile} className="w-8" alt="mobile" />
            </span>
            <span className="absolute right-4  top-1/3">
              <img src={flag} className="w-10" alt="mobile" />
            </span>
            <input
              type="number"
              className="bg-light-100 py-5 px-16 w-full px-3 my-3 text-dark5 rounded-md"
              placeholder="+234"
            />
          </div>

          <button className="w-full rounded-md text-white py-3 bg-primary font-mont">
            PAY 20,000
          </button>
        </div>
      </div>
      <div className="my-10">
        <SimilarCompanies />
      </div>
    </>
  );
};
export default Subscription;

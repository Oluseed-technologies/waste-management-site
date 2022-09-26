import { useNavigate } from "react-router-dom";
import plan from "./Plans.json";
import mark from "../../../assets/mark.png";
import curve from "../../../assets/curve.png";
import Arrow from "../../../assets/Arrow 1.png";
const PaymentPlan = () => {
  const navigate = useNavigate();
  const renderPlan = plan.map((data, index) => {
    return (
      <div
        key={index}
        style={{ border: "2px solid #3CAA35" }}
        className="p-5 px-10 my-10 rounded-md"
      >
        <h1 className="text-primary text-center text-2xl uppercase font-bold">
          {data.type}
        </h1>
        {/* <div className="px-10"> */}
        <ul className="my-5">
          <li className="flex py-2 items-center ">
            {" "}
            <span className="mr-2">
              <img className="w-4" src={mark} />
            </span>
            {data.price}
          </li>
          <li className="flex py-2 items-center ">
            {" "}
            <span className="mr-2">
              <img className="w-4" src={mark} />
            </span>
            {data.duration}
          </li>
          <li className="flex py-2 items-center ">
            {" "}
            <span className="mr-2">
              <img className="w-4" src={mark} />
            </span>
            {data.bonus}
          </li>
        </ul>
        {/* </div/> */}
        <button
          onClick={() =>
            navigate(`/manage-waste/subscription/${data.type.toLowerCase()}`)
          }
          className="bg-primary relative  w-full rounded-md py-2  text-white font-mont"
        >
          Proceed{" "}
          <span className=" absolute right-4  top-1/4   ">
            <img src={Arrow} className="w-4" alt="arrow" />
          </span>
        </button>
      </div>
    );
  });
  return (
    <div className="plans my-5">
      <h1 className="text-primary w-max my-7 mx-auto relative font-bold text-2xl text-center">
        Flexible <span className="text-dark4">Plans</span>{" "}
        <span className="absolute left-0 -bottom-5">
          <img src={curve} alt="curve" />
        </span>
      </h1>
      <div className=" block md:flex justify-between items-center">
        {renderPlan}
      </div>
    </div>
  );
};
export default PaymentPlan;

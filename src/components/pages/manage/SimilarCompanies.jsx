import {useNavigate} from 'react-router-dom'
import Company1 from "../../../assets/company1.png";

const SimilarCompanies = () => {
  const arr1 = new Array(4).fill(0);
  const navigate = useNavigate()
  const renderCompanies = arr1.map((data, index) => {
    return (
      <div onClick ={() => navigate('/manage-waste/company')} className="-flex w-full md:w-56 mx-2 shadow-md rounded-md flex-col my-3">
        <img src={Company1} className="w-full" alt="company1" />
        <div className="bg-white p-3">
          <div className="text-primary-100 text-xs flex font-bold">
            <p>Olaoluwa Waste Management</p>
            <p className="text-secondary">2500</p>
          </div>
          <p className="text-xss">No. 9 Under G Area, Lagos, Nigeria.</p>
          <p className="text-xs text-primary-100">ratings</p>
        </div>
      </div>
    );
  });
  return (
    <div className="my-10">
      <h1
        style={{ color: "#1D6558" }}
        className=" text-3xl text-center font-bold"
      >
        Similar Companies
      </h1>
      <div className="md:m-20 m-4 md:flex block justify-between">{renderCompanies}</div>;
      {/* <div className="mx-auto//"> */}
      <button className="font-mont w-64 mx-auto block py-2 bg-primary rounded-md text-white">
        See more...
      </button>
      {/* </div> */}
    </div>
  );
};
export default SimilarCompanies;

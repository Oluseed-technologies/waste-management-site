import img1 from "../../../assets/img5.png";
const Companies = () => {
  const arrs = new Array(8).fill(0);
  const renderCompanies = arrs.map((data) => {
    return (
      <div className="-flex  w-48 mx-2 shadow-md rounded-md flex-col my-3">
        <img src={img1} className="object-fill" alt="company1" />
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
  //   console.log(arrs);
  return (
    <>
      <div className="flex justify-between my-5 flex-wrap">
        {renderCompanies}
      </div>
      <div className="btn flex justify-center">
        <button className="bg-primary font-mont text-white w-56 rounded-md py-1">
          See more...
        </button>
      </div>
    </>
  );
};
export default Companies;

import companyImg from "../../../assets/companyImg.png";
import star1 from "../../../assets/star1.png";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import linkediln from "../../../assets/linkediln.png";
import pinterest from "../../../assets/pinterest.png";
import map from "../../../assets/map.png";
import Arrow from "../../../assets/Arrow 1.png";
import PaymentPlan from "./PaymentPlan";
import OurTeam from "../../pages/About/OurTeam";
import SimilarCompanies from "./SimilarCompanies";

const Company = () => {
  const arr = new Array(5).fill(0);
  const renderStar = arr.map((data, index) => {
    return (
      <span>
        <img className="w-4 mx-1" src={star1} alt={`${data - index}`} />
      </span>
    );
  });
  const renderDate = arr.map((data, index) => {
    return (
      <div key={index} className="flex justify-between my-3 items-center">
        <p className="bg-primary text-white mr-3 px-2 py-4 rounded-full">MON</p>
        <p className="mx-3 bg-dark2 text-dark4 rounded-md p-3">08:00 AM</p>
        <span className="mx-3 w-8 h-0.5 bg-dark"></span>
        <p className="mx-3 bg-dark2 text-dark4 rounded-md p-3">07:00 PM</p>
      </div>
    );
  });

  return (
    <>
      <div className="company m-20">
        <div className="flex flex-col">
          <img src={companyImg} />
        </div>
        <div className="my-5">
          <div className="flex justify-between">
            <h1 className="text-primary font-bold">
              Olaoluwa Waste Management
            </h1>
            <h1 className="text-secondary font-bold">Price: 2500</h1>
          </div>
          <div className="flex justify-between">
            <p>No. 9 Under G Area, Lagos, Nigeria.</p>
            <p className="flex items-center">Rating 4.5 {renderStar}</p>
          </div>
        </div>
        <div className="my-7">
          <h1 className="text-primary my-5 text-center font-bold text-2xl">
            About Us
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            facilisis mattis ut convallis amet enim non malesuada. Aliquet
            ornare in auctor arcu, maecenas curabitur nec molestie iaculis. Cras
            tristique velit neque pharetra tempus eget platea. Id luctus
            ultricies eleifend ut. At purus sed dolor, risus a in tincidunt in
            hac. Ultrices vitae, a non, tellus feugiat interdum aliquet non
            porta. A morbi in hendrerit lectus. Nisi, odio nullam nibh odio
            morbi faucibus. Massa, pellentesque mauris nulla amet, odio etiam id
            enim. Cursus nisi, tempus mi dolor nec at nunc bibendum. Augue
            nullam euismod est tristique turpis risus eget. Quam morbi nunc
            purus congue nunc, nunc, habitant. Feugiat semper accumsan facilisis
            congue. Magna dignissim diam in blandit sed proin. Viverra in amet
            justo, commodo vitae quam feugiat viverra purus. Lacus amet nisi
            arcu rhoncus. Praesent diam commodo donec lectus facilisi nam eu
            interdum. Turpis praesent consectetur dolor semper libero tortor.
            Odio bibendum sit aliquam nulla urna elit, sed. Dis amet, eu pretium
            mattis a velit sed. Viverra amet, sit sodales a. Dictum aenean ut
            senectus risus. Lacinia duis aenean quam tortor nec id vulputate id.
            Purus tincidunt natoque nibh eros, in lacus. Sed cras id libero
            pharetra viverra. Semper aliquam quam maecenas adipiscing pharetra.
            Quis tristique morbi sed quisque tempor cum pellentesque mauris
            cursus. Pellentesque elementum sit varius accumsan eu proin mollis
            eget. Duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lectus facilisis mattis ut convallis amet enim non malesuada.
            Aliquet ornare in auctor arcu, maecenas curabitur nec molestie
            iaculis. Cras tristique velit neque pharetra tempus eget platea. Id
            luctus ultricies eleifend ut. At purus sed dolor, risus a in
            tincidunt in hac. Ultrices vitae, a non, tellus feugiat interdum
            aliquet non porta. A morbi in hendrerit lectus. Nisi, odio nullam
            nibh odio morbi faucibus. Massa, pellentesque mauris nulla amet,
            odio etiam id enim. Cursus nisi, tempus mi dolor nec at nunc
            bibendum. Augue nullam euismod est tristique turpis risus eget. Quam
            morbi nunc purus congue nunc, nunc, habitant. Feugiat semper
            accumsan facilisis congue. Magna dignissim diam in blandit sed
            proin. Viverra in amet justo, commodo vitae quam feugiat viverra
            purus. Lacus amet nisi arcu rhoncus. Praesent diam commodo donec
            lectus facilisi nam eu interdum. Turpis praesent consectetur dolor
            semper libero tortor. Odio bibendum sit aliquam nulla urna elit,
            sed. Dis amet, eu pretium mattis a velit sed. Viverra amet, sit
            sodales a. Dictum aenean ut senectus risus. Lacinia duis aenean quam
            tortor nec id vulputate id.
          </p>
        </div>
        <div className="flex justify-between my-10">
          <div>
            <h1 className="font-bold">Working Hours</h1>
            <div className="my-3">{renderDate}</div>
          </div>
          <div>
            <h1 className="font-bold">Follow Us</h1>
            <div className="my-3">
              <p className="flex text-dark1 my-2  justify-between items-center">
                <span className="mr-3">
                  <img src={facebook} />
                </span>
                oluwastemangement
              </p>
              <p className="flex text-dark1 my-2 justify-between items-center">
                <span className="mr-3">
                  <img src={instagram} />
                </span>
                oluwastemangement
              </p>
              <p className="flex text-dark1 my-2  justify-between items-center">
                <span className="mr-3">
                  <img src={linkediln} />
                </span>
                oluwastemangement
              </p>
              <p className="flex text-dark1 my-2  justify-between items-center">
                <span className="mr-3">
                  <img src={pinterest} />
                </span>
                oluwastemangement
              </p>
              <div className="w-64">
                <img src={map} />
              </div>
            </div>
          </div>
        </div>

        <PaymentPlan />
      </div>
      <div className="py-10" style={{ background: "#EBF7EB" }}>
        <OurTeam />
      </div>

      <SimilarCompanies />
    </>
  );
};
export default Company;

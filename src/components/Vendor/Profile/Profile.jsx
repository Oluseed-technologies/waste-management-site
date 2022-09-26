import { Header } from "../Header";
import user2 from "../../../assets/VendorProfile.png";
import star from "../../../assets/star1.png";
import OurTeam from "../../../components/pages/About/OurTeam";
import PaymentPlan from "../../../components/pages/manage/PaymentPlan";
import Footer from "../../../components/common/Footer/Footer";
import { motion } from "framer-motion";
const Profile = () => {
  const arr = new Array(5).fill(0);
  const renderRating = arr.map((data, index) => {
    return (
      <span>
        <img src={star} className="w-8 mx-2" alt={`star-${index}`} />
      </span>
    );
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:ml-72 md:mr-10 my-10"
      >
        <Header />
        <div className="block  md:flex items-center">
          <div>
            <img src={user2} className="w-96 md:mx-0 mx-auto" />
          </div>
          <div className="flex flex-col md:my-0 my-5 justify-between  md:mx-5 mx-2">
            <h1 className="text-primary-100 font-bold md:text-2xl">
              Olaoluwa waste mangement
            </h1>
            <p className="md:text-2xl my-3">
              No. 9 Under G Area, Lagos, Nigeria.
            </p>
            <p className="md:text-2xl flex items-center text-primary-100 font-bold my-3">
              Rating 4.5 {renderRating}
            </p>
            <p className="md:text-2xl my-3">Verify Balance: $30,000</p>
            <p className="md:text-2xl my-3">Pending Balance: $30,000</p>
          </div>
        </div>
        <div>
          <h1 className="text-center text-primary-100 font-semibold my-8 text-3xl">
            About Us
          </h1>
          <p>
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
            Quis tristique morbi sed quisque
          </p>
        </div>
      </motion.div>

      <div className="mx-4 md:ml-72 md:mr-10 my-10">
        <PaymentPlan />
      </div>
      <OurTeam />

      <div className="block md:hidden">
        <Footer />
      </div>
    </>
  );
};
export default Profile;

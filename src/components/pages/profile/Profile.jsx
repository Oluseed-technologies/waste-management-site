import Sidebg from "../../../assets/sidebg.png";
import profileImg from "../../../assets/profileImg.png";
import user from "./user";
import style from "./Profile.module.css";
import { motion } from "framer-motion";
const Profile = () => {
  const arr = new Array(7).fill(0);
  const renderTransaction = arr.map((data) => {
    return (
      <ul className="flex bg-light p-5 rounded-md my-4 justify-around">
        <li>21 - 05 - 2019</li>
        <li>Olas Waste Mangement</li>
        <li>25,000</li>
      </ul>
    );
  });

  const renderSubscription = arr.map((data) => {
    return (
      <ul className="flex bg-light p-5 rounded-md my-4 justify-around">
        <li>Olas Waste Mangement</li>
        <li>17</li>
      </ul>
    );
  });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="profile   md:m-24"
      >
        <div
          className={` ${style.profile} md:bg-inherit block md:flex items-center`}
        >
          <div className="w-64 py-6 md:py-0  md:mx-0 mx-auto">
            <img src={profileImg} className="object-cover" alt="profileImg" />
          </div>
          <div className="px-2 md:mx-16">
            <div className="block md:text-start text-center md:my-0 my-4 md:flex items-end">
              <h1 className="text-primary text-3xl font-bold capitalize">
                {user.firstName} {user.lastName}
              </h1>
              <div className="mx-5 text-dark6 ">
                <span>{user.city}</span>, <span>{user.state}</span>.
              </div>
            </div>
            <div className="my-8 md:py-0 py-3 text-dark6">
              <h2>About</h2>
              <div className="my-5">
                <p className="my-3">Phone number: {user.phone}</p>
                <p className="my-3">Address: {user.address}</p>
                <p className="my-3">Email: {user.email}</p>
                <p className="my-3">Dare of birth : {user.dob}</p>
                <p className="my-3">Gender: {user.gender}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 px-3  md:mx-0 text-dark6">
          <h1 style={{ borderBottom: "2px solid #3CAA35" }} className="  w-max">
            Transaction history
          </h1>
          <div className="my-8">
            <ul className="flex justify-around">
              <li>Date</li>
              <li>Company</li>
              <li>Amount Spent (N)</li>
            </ul>
            {renderTransaction}
          </div>
        </div>

        <div className="my-10  mx-3 md:mx-0  text-dark6">
          <h1 style={{ borderBottom: "2px solid #3CAA35" }} className="w-max">
            Subscriptions
          </h1>
          <div className="my-8 max-w-lg">
            <ul className="flex justify-around">
              <li>Company</li>
              <li>Days Left</li>
            </ul>
            {renderSubscription}
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Profile;

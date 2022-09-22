import user2 from "../../../assets/user2.png";
import { HiChevronDown } from "react-icons/hi";
import Header from "../Header";
import Footer from '../../../components/common/Footer/Footer'
const Dashboard = () => {
  const arr = new Array(6).fill(0);
  const renderUsers = arr.map((data) => {
    return (
      <tr
        style={{ color: "#A0AEC0", overflow : 'scroll' }}
        className="border-b-2 border-solid border-grey-200"
      >
        <tr cellspacing="8" cellpadding="4" className="">
          <td style={{ padding: "10px", paddingLeft: "0" }}>
            <img className="w-16" alt="img" src={user2} />
          </td>
          <td className="mx-3">
            <h2 style={{ color: "#2D3748" }} className="font-semibold">
              Esther Jackson
            </h2>
            <h2>allwell@gmail.com</h2>
          </td>
        </tr>
        <td>
          <h1>17TH MAR - 17TH APRIL</h1>
        </td>
        {/* <td className="bg-primary rounded-2xl text-white text-center "> */}
        <td>Active </td>
        {/* <td>
            <HiChevronDown />
          </td> */}
        {/* </td> */}
      </tr>
    );
  });
  return (
    <>
      <div className=" mx-4 md:ml-72 md:mr-10 my-10">
        <Header />

        <h1 className="text-3xl font-bold text-dark7">Accounts</h1>
        <table truncate className="my-3 md:w-3/4">
          <tr className="md:text-xl text-md truncate" style={{ color: "#A0AEC0" }}>
            <td>USERS</td>
            <td>SUBSCRIPTION</td>
            <td>STATUS</td>
          </tr>

          {renderUsers}
        </table>
      </div>
      <div className='block md:hidden'>
      <Footer/>
       </div>
    </>
  );
};
export default Dashboard;

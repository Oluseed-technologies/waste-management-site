import Logo from "../Logo/Logo";
import style from './Footer.module.css'
import clock from "../../../assets/clock.png";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import linkediln from "../../../assets/linkediln.png";
import pinterest from "../../../assets/pinterest.png";
const Footer = () => {
  return (
    <footer className={` ${style.footer} md:px-64 px-4  text-start md:py-24 py-10`}>
      <div className="block md:flex justify-between pb-12 border-b-2 border-grey-300 border-solid">
        <div className="">
          <h3 className='text-center md:text-start'>Join Our Newsletter</h3>
          <p className="my-5 text-center md:text-start">Get the latest news and updates from us</p>
        </div>
        <div className="flex md:items-center">
          <input
            type="email"
            placeholder="Enter address"
            style={{ background: "rgba(29,22,16,0.05)" }}
            className="border-2 text-xs rounded-md p-3 w-full text-black md:w-72 border-grey-100"
          />
          <button className="py-3 font-mont rounded-lg -mx-2 md:mx-3 md:w-auto w-32 px-5 text-xs  bg-secondary">
            SIGN UP
          </button>
        </div>
      </div>
      <div className="block md:flex my-12 justify-evenly pb-7">
        <div className="md:flex hidden flex-col">
          <Logo />
          <p className="text-sm my-5">
            Use securing confined his shutters. <br /> Delightful as he it
            acceptance an <br /> solicitude discretion.
          </p>
        </div>
        <div className='flex justify-between md:block'>
        <div className="flex flex-col">
          <h1 className="font-semibold">Working Hours</h1>
          <div
            style={{ color: " #6C6864" }}
            className="my-3 text-xs md:text-md flex flex-col justify-between"
          >
            <p className=" my-3 flex items-center ">
              <span className="mx-2">
                <img src={clock} alt="clock" />
              </span>
              Mon - Fri: 09:00AM - 09:00PM
            </p>
            <p className=" my-3  flex items-center">
              {" "}
              <span className="mx-2">
                <img src={clock} alt="clock" />
              </span>
              Sat: 09:00AM - 07:00PM
            </p>
            <p className=" my-3  flex items-center">
              {" "}
              <span className="mx-2">
                <img src={clock} alt="clock" />
              </span>
              Sun: Closed
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">Follow Us</h1>
          <div className="flex my-5 justify-between items-center">
            <img src={facebook} className="mx-3" alt="facebook" />
            <img src={linkediln} className="mx-3" alt="linkediln" />
            <img src={instagram} className="mx-3" alt="instagram" />
            <img src={pinterest} className="mx-3" alt="pinterest" />
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

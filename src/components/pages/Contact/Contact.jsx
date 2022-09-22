import bg from "../../../assets/bg2.png";
import map from "../../../assets/map.png";
import Youtube from "../../../assets/Youtube2.png";
import Facebook from "../../../assets/Facebook2.png";
import Instagram from "../../../assets/Instagram2.png";
import Twitter from "../../../assets/Twitter2.png";
import style from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <div  className={`${style.contact}`}>
        <main
          style={{ background: `url(${bg})` }}
          className="contact relative px-10 pt-32 pb-52"
        >
          <h1 className="font-semibold text-4xl my-3 text-white">
            Get in touch
          </h1>
          <p className="text-white font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nemo <br /> assumenda soluta asperiores eius quis dicta,
            qui vitae et illum!
          </p>
          <div className="contact bg-white absolute top-3/4 p-10 shadow-md left-2 right-2 md:left-24 md:right-24  z-5">
            <h1
              style={{ borderBottom: "2px solid #3CAA35" }}
              className="text-primary  pb-4 max-w-xs my-3 mx-auto  text-center text-2xl"
            >
              Get in Touch
            </h1>
            <p className="text-bold">Leave us a message</p>
            <div className="block md:flex justify-between items-center">
              <div className="flex flex-col">
                <input
                  style={{ border: "1.2px solid #B4BEC8" }}
                  placeholder="username"
                  type="text"
                  className="md:w-96 w-full py-2 px-3 rounded-md my-3 text-sm"
                />
                <input
                  style={{ border: "1.2px solid #B4BEC8" }}
                  placeholder="email"
                  className="md:w-96 w-full y-2 px-3 rounded-md my-3 text-sm"
                  type="text"
                  name=""
                  id=""
                />
                <textarea
                  style={{ border: "1.2px solid #B4BEC8" }}
                  name=""
                  id=""
                  placeholder="Your message"
                  cols="30"
                  rows="10"
                  className="md:w-96 w-full py-2 px-3 rounded-md my-3 text-sm"
                ></textarea>
                <button className="bg-primary w-full rounded-md text-white font-mont py-4">
                  Send
                </button>
              </div>
              <div className="flex text-sm flex-col">
                <p className="py-5">
                  Infomation technologies building, Victoria Island, Lagos,
                  Nigeria.
                </p>
                <p className="py-5">+234 081-1236-4568</p>
                <p className="py-5">hello@info.com.ng</p>
                <div className="socials flex justify-around my-5">
                  <img src={Twitter} alt="Twitter" />
                  <img src={Youtube} alt="Youtube" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={Facebook} alt="Facebook" />
                </div>
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Contact;

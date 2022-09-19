import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <footer className=" md:px-64 px-4 text-start py-24">
      <div className="block md:flex justify-between pb-12 border-b-2 border-grey-300 border-solid">
        <div className="">
          <h3>Join Our Newsletter</h3>
          <p className="my-3">Get the latest news and updates from us</p>
        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter address"
            style={{ background: "rgba(29,22,16,0.05)" }}
            className="border-2 text-xs rounded-md p-2 text-black w-72 border-grey-100"
          />
          <button className="py-2 rounded-lg mx-3 px-5 text-xs  bg-secondary">
            SIGN IN
          </button>
        </div>
      </div>
      <div className="block md:flex my-12 justify-between pb-7">
        <div className="flex flex-col">
          <Logo />
          <p className="text-sm">
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

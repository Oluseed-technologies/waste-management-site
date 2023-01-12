import siteLogo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img className="md:w-auto w-10" src={siteLogo} alt="website logo" />
    </div>
  );
};
export default Logo;

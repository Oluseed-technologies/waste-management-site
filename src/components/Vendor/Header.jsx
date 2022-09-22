import topIcon from "../../assets/topIcon.png";
import search from "../../assets/search.png";
import exportIcon from "../../assets/exportIcon.png";
import user1 from "../../assets/user1.png";
const Header = () => {
  return (
    <>
      <header className="hidden md:flex  items-center justify-between">
        <div className="text-dark7">
          <h1 className="text-5xl py-1 font-bold">Dashboard</h1>
          <p className="py-1">Hi Bedlam welcome back</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative">
            <input
              style={{ border: "1px solid #cccccc" }}
              type="text"
              className="rounded-full p-3 pl-14"
              placeholder="Search everything"
            />
            <span className="absolute top-1/4 left-4">
              <img src={search} alt="search" />
            </span>
          </div>
          <span className="mx-3">
            <img src={topIcon} alt="icon" />
          </span>
          <span className="mx-3">
            <img src={user1} className="rounded-full" alt="user1 " />
          </span>
        </div>
      </header>
      <div className="hidden md:flex justify-between my-8 items-center">
        <div className="relative  ">
          <input
            style={{ border: "1px solid #cccccc" }}
            type="text"
            className="rounded-md w-96 p-3 pl-14"
            placeholder="Search everything"
          />
          <span className="absolute top-1/4 left-4">
            <img src={search} alt="search" />
          </span>
        </div>
        <div className="relative  ">
          <button
            style={{ border: "2px solid #cccccc" }}
            className="rounded-md  p-3 pr-8 pl-12"
          >
            Export
          </button>
          <span className="absolute top-1/3 left-4">
            <img src={exportIcon} alt="search" />
          </span>
        </div>
      </div>
    </>
  );
};
export default Header;

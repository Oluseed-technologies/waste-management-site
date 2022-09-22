import person from "../../../assets/person1.png";
const arr = new Array(6).fill(0);
const renderTeams = arr.map((data) => {
  return (
    <div className="flex w-48 justify-center items-center m-3 flex-col">
      <img src={person} alt="team image" />
      <h2 className="font-bold">Music Director</h2>
      <h3 className="text-primary font-bold">John Doe</h3>
    </div>
  );
});
const OurTeam = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center text-3xl my-10 font-bold">Meet Our Team</h1>
        <div className="flex flex-wrap px-2 md:px-64 justify-center">{renderTeams}</div>
      </div>
    </>
  );
};
export default OurTeam;

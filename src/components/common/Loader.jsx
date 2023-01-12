import { TraceSpinner } from "react-spinners-kit";
const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2 ">
      <TraceSpinner countBalls="10" size={100} frontColor="#3caa35" />
    </div>
  );
};
export default Loader;

const ButtonComponent = ({ title, bgcolor, width, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`${
        bgcolor === undefined ? "bg-primary" : bgcolor
      } py-2 px-5 ${width} rounded-md text-white`}
    >
      {title}
    </button>
  );
};
export default ButtonComponent;

export const InputComponent = ({
  type,
  values,
  setValues,
  name,
  placeholder,
  label,
}) => {
  const HandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex my-2 flex-col">
      <label className="text-sm md:text-base text-dark11">{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        className="text-dark12 w-full input-border my-2 md:p-3 p-1"
        type={type}
        value={values[name]}
        onChange={HandleChange}
      />
    </div>
  );
};

// export const SelectComponent = ({}) > {
//   return (
//     <div>
//     <label> select component </label>
//     <select>
//     <option value='value'>
//     option value
//     </option>
//     </select>
//     </div>
//   )
// }

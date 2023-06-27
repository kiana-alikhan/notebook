/* eslint-disable react/prop-types */
export const Input = (props) => {
  const { type, name, id, value, onChange, lable } = props;
  return (
    <div>
      <label htmlFor="fname">{lable}</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

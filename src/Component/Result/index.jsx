export const Result = (props) => {
  // eslint-disable-next-line react/prop-types
  const { firstName, lastName, city } = props;
  return (
    <div>
      <h3>{`I am ${firstName} ${lastName} and I am from ${city}`}</h3>
    </div>
  );
};

export const Input = (props) => {
  const { numero } = props;
  return <input type="number" value={numero} readOnly />;
};

const Button = (props) => {
  const { firstName, lastName, click } = props;
  return (
    <button onClick={click}>Birthday Button for {firstName} {lastName}</button>
  );
}

export default Button;
import Button from "./Button";
import { useState } from "react";

function PersonCard(props) {

  const { firstName, lastName, age, hairColor } = props;

  const [newage, setNewage] = useState(age);

  const increseAge = () => {
    setNewage(newage + 1);
  }

  return (
    <>
      <h1>{firstName}, {lastName}</h1>
      <p>Age: {newage}</p>
      <p>Hair Color: {hairColor}</p>
      <Button click={increseAge} firstName={firstName} lastName={lastName} />
    </>
  );
}

export default PersonCard;
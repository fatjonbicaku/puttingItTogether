import PersonCard from "./components/PersonCard";

function App() {

  return (
    <>
    <PersonCard firstName='Joe' lastName='Jane' age={45} hairColor='Black' />
    <PersonCard firstName='Smith' lastName='John' age={88} hairColor='Brown' />
    <PersonCard firstName='Fillmore' lastName='Millard' age={50} hairColor='Brown' />
    </>
  )
}

export default App

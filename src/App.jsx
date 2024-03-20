import Header from "./components/Header"
import { useState } from "react";
import UserInput from "./components/userInput"
import Results from "./components/results";
function App() {
  const[userInput, setUserInput]=useState({
    InitialInvestment:1000,
    AnnualInvestment:1200,
    ExpectedReturn:6,
    Duration:10,
});
function handleChange(inputIdentifier,newValue){
    setUserInput(prevInput=>
        {
            return{
                ...prevInput,
                [inputIdentifier]: +newValue
            };

    });
}
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results input={userInput}/>
    </>
  )
}

export default App

import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Details from "./components/Details/Details";

function App() {
  const [userName, setUserName] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [repos, setRepos] = useState();

  const onGo = (userName) => {
    console.log(userName);
    setUserName(userName);
  };

  useEffect(() => {
    if (userName === "") {
      return;
    }
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((details) => {
        setUserDetails(details);
      });
  }, [userName]);

  useEffect(() => {
    if (!userDetails) {
      return;
    }
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        setRepos(repos);
      });
  }, [userDetails]);

  return (
    <div className="App">
      <Form onGo={onGo}></Form>
      {userDetails && repos && (
        <Details details={userDetails} repos={repos}></Details>
      )}
    </div>
  );
}

export default App;

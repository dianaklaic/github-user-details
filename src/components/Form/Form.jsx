import { useState } from "react";
import "./Form.scss";

const Form = (props) => {
  const { onGo } = props;
  const [userName, setUserName] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onGoClicked = (e) => {
    e.preventDefault();
    console.log("click");
    onGo(userName);
  };

  return (
    <form>
      <div className="username-control">
        <label>GitHub username: </label>
        <input type="text" value={userName} onChange={onUserNameChange}></input>
      </div>
      <button onClick={onGoClicked}>Go</button>
    </form>
  );
};

export default Form;

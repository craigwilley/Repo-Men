import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
      <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return(
        firstName !== "" &&
        validateEmail(email) &&
        password.value.length >= 8 &&
        (role === "individual" || role === "business")
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({value: "", isTouched: false});
    setRole("");
  };

  const handleSubmit = () => {
    alert("Account created!");
    clearForm();
  };

  return (
      <div className="App">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input placeholder="First name" type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
            </div>
            <div className="Field">
              <label>Last name</label>
              <input placeholder="Last name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {!validateEmail(email) && <p className="FieldError">Please enter a valid email address</p>}
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                  placeholder="Password"
                  type="password"
                  value={password.value}
                  onChange={(e) => setPassword({...password, value: e.target.value})}
                  onBlur={() => setPassword({...password, isTouched: true})}
                  onFocus={() => setPassword({...password, isTouched: true})}
              />
              {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
  );
}

export default App;

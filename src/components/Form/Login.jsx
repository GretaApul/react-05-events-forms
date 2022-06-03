import { useState } from 'react';

function Login() {
  const [usernameValue, setUsernameValue] = useState('');
  const [passeordValue, setPasseordValue] = useState('');
  const [showUsername, setShowUsername] = useState(false);

  function usernameEnterHandler(event) {
    console.log('entering value to input');
    console.log('event', event);
    console.log('event.target', event.target);
    const inputEl = event.target;
    const inputValue = inputEl.value;
    setUsernameValue(inputValue);
  }
  function passwordEnterHandler(event) {
    console.log('event.target passw', event.target);

    setPasseordValue(event.target.value);
  }

  //   ===================
  return (
    <div className="login">
      <form onSubmit={sendValues}>
        <input
          onChange={usernameEnterHandler}
          type="text"
          placeholder="your text"
          value={usernameValue}
        />
        <input
          onChange={passwordEnterHandler}
          value={passeordValue}
          type="password"
          placeholder="password"
        />
        <h3>input reiksme: {usernameValue}</h3>
        <button type="submit">Submit</button>
        {showUsername && <h2>input reiksme: {usernameValue}</h2>}
      </form>
    </div>
  );
  //   =====================
  function displayValue() {
    console.log('display value called');
    setShowUsername(!showUsername);
  }

  //   =========================================
  function sendValues(event) {
    event.preventDefault();

    if (usernameValue === '') return;
    //send values
    // reiksmes imam is state, nes ji sinchronizuota su inputais
    const loginOb = {
      username: usernameValue,
      password: passeordValue,
    };
    console.log('loginOb ====', loginOb);

    //clear inputs:
    setUsernameValue('');
    setPasseordValue('');
  }
}

export default Login;

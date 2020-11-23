import React, {useState} from 'react';


const Login = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // onSubmit({password ,Login})
  };

  return (
    <form>
      <label>
        <input type="text" onChange={(evt) => setLogin(evt.target.value)} value={login}/>
      </label>
      <label>
        <input type="text" onChange={(evt) => setPassword(evt.target.value)} value={password}/>
      </label>
    </form>
  )
};

export default Login;

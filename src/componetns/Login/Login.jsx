import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Operations} from '../../redusers/reducer';

const Login = (props) => {
  const {onSubmit, logout, isUserError} = props;
  const [name, setName] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (password && name) {
      onSubmit({password, name});
      setName('');
      setPassword('');
    }
  };

  return (
    <React.Fragment>
      <button onClick={logout}>logout</button>
      <form onSubmit={handleSubmit}>
        {isUserError && <p>Такого пользователя не существует!</p>}
        <label>
          <input type="text" onChange={(evt) => setName(evt.target.value)} value={name} />
        </label>
        <label>
          <input type="text" onChange={(evt) => setPassword(evt.target.value)} value={password} />
        </label>
        <button>Submit</button>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isUserError: state.isUserError,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (user) => {
    dispatch(Operations.setUser(user));
  },
  logout: () => {
    dispatch(Operations.logout());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator, Operations} from '../../redusers/reducer';
import './formLogin.scss'

const FormLogin = (props) => {
  const {onSubmit, setIsOpen, isUserError, onRemoveUserError} = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (evt) => {

    evt.preventDefault();
    if (password && name) {
      onSubmit({password, name});
      setName('');
      setPassword('');

    } else {
      setError(true)
    }
  };
  const handleClosePopup = (evt) => {
    evt.stopPropagation();
    if (evt.target.className === 'form-login-wrap') {
      setIsOpen(false)
    }
  };
  return (
    <div className="form-login-wrap" onClick={handleClosePopup}>

      <form onSubmit={handleSubmit} className='form-login'>
        {isUserError && <p className='form-login__error'>There is no such user!</p>}
        {error && <p className='form-login__error'>You should type password and name</p>}
        <label className='form-login__label'>
          Name:
          <input type="text" onChange={(evt) => {
            if (error) {
              setError(false)
            }
            if (isUserError) {
              onRemoveUserError()
            }
            setName(evt.target.value)
          }} value={name}/>
        </label>
        <label className='form-login__label'>
          Password:
          <input type="password" onChange={(evt) => {
            if (error) {
              setError(false)
            }
            if (isUserError) {
              onRemoveUserError()
            }
            setPassword(evt.target.value)
          }} value={password}/>
        </label>
        <button type="submit" className='btn'>Submit</button>
        <button className='form-login__btn-close' onClick={() => setIsOpen(false)}><span
          className='visuallyhidden'>close</span></button>

      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserError: state.isUserError,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (user) => {
    dispatch(Operations.setUser(user));
  },
  onRemoveUserError: () => {
    dispatch(ActionCreator.setUserError(false));
  },
  logout: () => {
    dispatch(Operations.logout());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);

import React, {useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Operations} from "../../reduser/reducer";

import FormLogin from "../Forms/FormLogin/FormLogin";
import Modal from "../Modal/Modal";

import './header.scss'

const Header = (props) => {
  const {user, logout} = props;
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    if(user){
      setIsOpen(false)
    }
  },[user])
  const handleClick = () => {
    setIsOpen(true)
  };

  const button = user ? <button onClick={logout}>Logout</button> : <button onClick={handleClick}>Login</button>
  return (
    <header className='header'>
      <div className="container">
        <nav>
          <ul className='menu'>
            <li className='menu__item'><NavLink to='/' exact>Main Page</NavLink></li>
            <li className='menu__item'><NavLink to='/news'>News Page</NavLink></li>
            <li className='menu__item menu__item-btn'>
              {button}
            </li>
          </ul>
        </nav>

        {isOpen && <Modal>
          <FormLogin setIsOpen={setIsOpen}/>
        </Modal>}
      </div>
    </header>
  )
};

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(Operations.logout());
  },
});

Header.propTypes = {
  user:PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  logout: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

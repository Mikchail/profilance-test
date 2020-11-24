import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {Operations} from "../../redusers/reducer";
import FormLogin from "../Forms/FormLogin";
import Modal from "../Modal/Modal";
import './header.scss'

const Header = (props) => {
  const {user,logout} = props;
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='header'>
      <div className="container">
        <nav>
          <ul className='menu'>
            <li className='menu__item'><NavLink to='/' exact>Main Page</NavLink></li>
            <li className='menu__item'><NavLink to='/news'>News Page</NavLink></li>
            <li className='menu__item menu__item-btn'>
              {!user && <a onClick={() => setIsOpen(prev=>!prev)}>Login</a>}
              {user && <a onClick={logout}>Logout</a>}
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
export default connect(mapStateToProps,mapDispatchToProps)(Header);

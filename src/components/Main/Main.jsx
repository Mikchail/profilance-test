import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reduser/reducer';
import FormAddNews from '../Forms/FormAddNews/FormAddNews';

import './main.scss'

const Main = (props) => {
  const {user, addNewsSubmit} = props;

  return (
    <main className='container main'>
      {!user && <p className='main__greet'>Hello, <span>Guest!</span> </p>}
      {user && (
        <React.Fragment>
          <p className='main__greet'>Hello, <span>{user}!</span></p>
          <p className='main__greet'>Add News!</p>
          <FormAddNews addNewsSubmit={addNewsSubmit}/>
        </React.Fragment>
      )}
    </main>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addNewsSubmit: (news) => {
    dispatch(ActionCreator.addNews(news));
  },
});
const mapStateToProps = (state) => ({
  user: state.user,
});

Main.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  addNewsSubmit: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

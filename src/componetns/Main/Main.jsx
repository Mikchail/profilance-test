import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redusers/reducer';
import FormAddNews from '../Forms/FormAddNews';
import PropTypes from 'prop-types';
import './main.scss'

const Main = (props) => {
  const {user, addNews, isAdmin} = props;

  return (
    <main className='container main'>
      {!user && <p className='main__greet'>Hello, <span>Guest!</span> </p>}
      {user && (
        <React.Fragment>
          <p className='main__greet'>Hello, <span>{user}!</span></p>
          <p className='main__greet'>Add News!</p>
          <FormAddNews addNews={addNews} isAdmin={isAdmin}/>
        </React.Fragment>
      )}
    </main>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addNews: (news) => {
    dispatch(ActionCreator.addNews(news));
  },
});
const mapStateToProps = (state) => ({
  user: state.user,
  isAdmin: state.isAdmin,
});

Main.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isAdmin: PropTypes.bool,
  addNews: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

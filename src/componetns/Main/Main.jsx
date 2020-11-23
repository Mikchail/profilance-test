import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redusers/reducer';
import FormAddNews from '../Forms/FormAddNews';
import PropTypes from 'prop-types';

const Main = (props) => {
  const {user, addNews, isAdmin} = props;

  return (
    <main>
      {!user && <p>Привет, Гость</p>}
      {user && (
        <React.Fragment>
          <p>Привет, {user}!</p>
          <FormAddNews addNews={addNews} isAdmin={isAdmin} />
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
  user: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]),
  isAdmin: PropTypes.bool,
  addNews: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redusers/reducer';
import {getApprovedNews, getNotApprovedNews} from '../../redusers/selectors';
import FormSort from '../Forms/FormSort';

const News = (props) => {
  const {isAdmin, deleteNews, approvedNews, notApprovedNews, setApproved} = props;
  return (
    <div>
      <h3>Not Approved</h3>
      <ul className="list">
        {notApprovedNews &&
          notApprovedNews.map((item) => {
            return (
              <Item key={item.id} item={item} isAdmin={isAdmin} deleteNews={deleteNews} setApproved={setApproved} />
            );
          })}
      </ul>
      <h3>Approved</h3>
      <FormSort />
      <ul className="list">
        {approvedNews &&
          approvedNews.map((item) => {
            return <Item key={item.id} item={item} isAdmin={isAdmin} deleteNews={deleteNews} />;
          })}
      </ul>
    </div>
  );
};

News.propTypes = {
  deleteNews: PropTypes.func,
  isAdmin: PropTypes.bool,
  setApproved: PropTypes.func,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      approved: PropTypes.bool.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  approvedNews: getApprovedNews(state),
  notApprovedNews: getNotApprovedNews(state),
});

const mapDispatchToProps = (dispatch) => ({
  setApproved: (id) => {
    dispatch(ActionCreator.setApproved(id));
  },
  deleteNews: (id) => {
    dispatch(ActionCreator.deleteNews(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(News);

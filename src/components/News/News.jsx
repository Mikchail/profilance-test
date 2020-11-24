import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/reducer';
import { getFilterApprovedNews, getNotApprovedNews} from '../../reducer/selectors';

import FormFilter from '../Forms/FormFilter/FormFilter';
import Item from '../Item/Item';

import './news.scss'

const News = (props) => {
  const {isAdmin, deleteNews,user, approvedNews, notApprovedNews, setApproved} = props;
  if(!user){
    return (
      <div className='container news'>
        <h3 className='news__title'>You should log in</h3>
      </div>
    )
  }
  return (
    <div className='container news'>

      {notApprovedNews &&
      <React.Fragment>
        <h3 className='news__title'>Not Approved</h3>
        <ul className="list">
          {notApprovedNews.map((item) => {
            return (
              <Item key={item.id} item={item} isAdmin={isAdmin} deleteNews={deleteNews} setApproved={setApproved}/>
            )
          })}
        </ul>
      </React.Fragment>
      }

      <h3 className='news__title'>Approved</h3>

      <FormFilter/>

      <ul className="list list-approved">
        {approvedNews &&
        approvedNews.map((item) => {
          return <Item key={item.id} item={item} isAdmin={isAdmin} deleteNews={deleteNews}/>;
        })}
      </ul>
    </div>
  );
};


const mapStateToProps = (state) => ({
  isAdmin: state.isAdmin,
  user: state.user,
  approvedNews: getFilterApprovedNews(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(News);

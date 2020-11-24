import React from 'react';
import PropTypes from 'prop-types';

import {getDateTimeString} from '../../utils';

import './item.scss'

const Item = (props) => {
  const {item, isAdmin, deleteNews, setApproved} = props;
  const exactlyTime = getDateTimeString(item.date);
  return (
    
    <li className="item">
      {isAdmin && <div className='item__wrap-btn'>
        {!item.approved && <button className='item__btn-approved btn' onClick={() => setApproved(item.id)}>Approve</button>}
        <button className='item__btn-delete btn' onClick={() => deleteNews(item.id)}>delete</button>
      </div>
      }
      <h3 className="item__title">{item.title}</h3>
      <p className="item__description">{item.description}</p>
      <time className="item__date">{exactlyTime}</time>
    </li>
  );
};

Item.propTypes = {
  deleteNews: PropTypes.func,
  isAdmin: PropTypes.bool,
  setApproved: PropTypes.func,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    approved: PropTypes.bool.isRequired,
  }),
};
export default Item;

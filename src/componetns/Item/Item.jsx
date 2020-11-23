import React from 'react';
import PropTypes from 'prop-types';
const Item = (props) => {
  const {item,isAdmin,deleteNews,setApproved} = props;
  const date = new Date(item.date);
  const exactlyTime = date.getDay() + ' ' + date.getFullYear();
  return (
    <li className="item">
      {(!item.approved && isAdmin) && <button onClick={()=>setApproved(item.id)}>Approved</button>}
      {isAdmin && <button onClick={()=>deleteNews(item.id)}>delete</button>}
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

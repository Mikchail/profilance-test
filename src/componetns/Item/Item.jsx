import React from 'react';

const Item = (props) => {
  const {item} = props;
  const date = new Date(item.date);
  const exactlyTime = date.getDay() + ' ' + date.getFullYear()
  return (
    <li className='item'>
      <h3 className='item__title'>{item.title}</h3>
      <p className='item__description'>{item.description}</p>
      <time className='item__date'>{exactlyTime}</time>
    </li>
  )
};

export default Item;

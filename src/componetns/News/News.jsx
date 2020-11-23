import React from 'react';
import PropTypes from 'prop-types';
import Item from "../Item/Item";


const News = (props) => {
  const {news} = props;
  return (
    <div>
      <ul className='list'>
        {news && news.map((item) => {
          return <Item item={item}/>
        })}
      </ul>
    </div>
  )
};

News.propTypes = {
  news: PropTypes.arrayOf([
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.number
    })
  ])
}

export default News;

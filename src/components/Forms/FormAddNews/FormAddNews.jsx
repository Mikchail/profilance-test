import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './formAddNews.scss'

const FormAddNews = (props) => {
  const {addNewsSubmit} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (title && description) {
      const newNews = {
        id: Math.random().toString(16).slice(2),
        title,
        description,
        date: Date.now(),
        approved: false
      };
      addNewsSubmit(newNews);
      setTitle('');
      setDescription('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='form-add'>
      <label className='form-add__title form-add__label'>
        Title:
        <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} />
      </label>
      <label className='form-add__description form-add__label'>
        Description:
        <textarea type="text" value={description} onChange={(evt) => setDescription(evt.target.value)} />
      </label>
      <button type="submit" className='btn'>Submit</button>
    </form>
  );
};

FormAddNews.propTypes = {
  addNewsSubmit: PropTypes.func
}
export default FormAddNews;

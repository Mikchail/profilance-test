import React, {useState} from 'react';

const FormAddNews = (props) => {
  const {addNews,isAdmin} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (title, description) {
      const newNews = {
        id: Math.random().toString(16).slice(2),
        title,
        description,
        date: Date.now(),
        approved: false
      };
      addNews(newNews);
      setTitle('');
      setDescription('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(evt) => setDescription(evt.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};


export default FormAddNews;

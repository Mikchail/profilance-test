import React, {useState} from 'react';

const FormSort = (props) => {
  const [sort, setSort] = useState('');
  const handleChange = (evt) => {
    evt.preventDefault();
    setSort(evt.target.value);
  };
  return (
    <label>
      Sort:
      <input type="text" value={sort} onChange={handleChange} />
    </label>
  );
};

export default FormSort;

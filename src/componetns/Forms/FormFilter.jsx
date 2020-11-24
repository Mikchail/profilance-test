import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redusers/reducer';
import './formFilter.scss'

const FormFilter = (props) => {
  const {filter} = props;
  const [sort, setSort] = useState('');

  useEffect(() => {
    filter(sort.trim());
  }, [sort])
  return (
    <label className='form-filter'>
      Search:
      <input
        type="text"
        value={sort}

        onInput={(evt) => {
          setSort(evt.target.value);
        }}
      />
    </label>
  );
};
const mapDispatchToProps = (dispatch) => ({
  filter: (str) => {
    dispatch(ActionCreator.setSortString(str));
  },
});
export default connect(null, mapDispatchToProps)(FormFilter);

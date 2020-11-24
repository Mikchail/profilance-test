import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../../reducer/reducer';

import './formFilter.scss'

const FormFilter = (props) => {
  const {filterNews} = props;
  const [sort, setSort] = useState('');

  useEffect(() => {
    filterNews(sort.trim());
  }, [sort,filterNews])
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
  filterNews: (str) => {
    dispatch(ActionCreator.setSortString(str));
  },
});

FormFilter.propTypes = {
  filterNews: PropTypes.func
}

export default connect(null, mapDispatchToProps)(FormFilter);

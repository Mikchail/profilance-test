import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redusers/reducer';

const FormSort = (props) => {
  const {filter} = props;
  const [sort, setSort] = useState('');
  // const handleChange = (evt) => {
  //   evt.preventDefault();
  //   console.log({sort});
  //   filter(sort.trim());
  // };
  useEffect(()=>{
    filter(sort.trim());
  },[sort])
  return (
    <label>
      Sort:
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
export default connect(null, mapDispatchToProps)(FormSort);

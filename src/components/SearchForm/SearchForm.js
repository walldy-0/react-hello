import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, searchCard } from '../../redux/store';

const SearchForm = () => {

  const searchString = useSelector(getSearchString);
  const [searchValue, setSearchValue] = useState(searchString);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchCard(searchValue));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default SearchForm;
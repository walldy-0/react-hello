import styles from '../ColumnForm/ColumnForm.module.scss';
import { useState } from "react";
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listReducer';

const ListForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title: title, description: description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
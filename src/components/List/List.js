import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsReducer';
import { getListById } from '../../redux/listReducer';
import { useParams, Navigate } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {

  const { listId } = useParams();
  const listData = useSelector(state => getListById(state, listId));
	const columns = useSelector(state => getColumnsByList(state, listId));

  if(!listData) return <Navigate to="/" />

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>{listData.title}</h1>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
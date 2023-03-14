import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import Cards from '../Cards/Cards';

const Column = props => {

  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-' + props.icon} />
      <h2 className={styles.title}>{props.title}</h2>
      <Cards props={cards} />
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
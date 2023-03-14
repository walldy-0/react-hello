import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsReducer';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      <span>{props.name}</span>
      <span onClick={toggleFavorite} className={clsx('fa fa-star-o', styles.favorite, props.isFavorite && styles.active)}></span>
    </li>
  );
};

export default Card;
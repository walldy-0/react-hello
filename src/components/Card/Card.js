import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const removeCurrentCard = () => {
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span onClick={toggleFavorite} className={clsx('fa fa-star-o', styles.favorite, props.isFavorite && styles.active)}></span>
        <span onClick={removeCurrentCard} className={clsx('fa fa-trash', styles.trash)} />
      </div>
    </li>
  );
};

export default Card;
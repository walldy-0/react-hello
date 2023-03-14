import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from 'react-redux';
import { getFavoritesCards } from '../../redux/cardsReducer';
import Cards from '../Cards/Cards';
import { Navigate } from 'react-router';

const Favorite = () => {

  const cards = useSelector(getFavoritesCards);

  if (!cards || cards.length === 0) return <Navigate to="/" />

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <Cards props={cards} />
      </div>
    </div>
  );
};

export default Favorite;
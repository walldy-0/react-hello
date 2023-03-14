import styles from './Cards.module.scss';
import Card from "../Card/Card";

const Cards = ({props}) => {

  return (
    <ul className={styles.cards}>
      {props.map(card => <Card key={card.id} id={card.id} name={card.title} isFavorite={card.isFavorite} />)}
    </ul>
  );
};

export default Cards;
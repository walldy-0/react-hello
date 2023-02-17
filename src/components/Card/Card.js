import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card}>{props.name}</li>
  );
};

export default Card;
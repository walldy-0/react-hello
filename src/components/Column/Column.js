import styles from './Column.module.scss';
import Card from '../Card/Card';

const Column = props => {
  return (
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-' + props.icon} />
      <h2 className={styles.title}>{props.title}</h2>
      <ul className={styles.cards}>
        {props.cards.map(card => <Card key={card.id} name={card.title} />)}
      </ul>
    </article>
  );
};

export default Column;
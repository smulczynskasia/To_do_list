import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';

const Column = props => {
    return (
        <article className={styles.column}>
            <h1 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon} />
                {props.title}
                <ul className={styles.cards}>
                    {props.cards.map(card => <Card key={card.id} title={card.title} />)}
                </ul>
                <CardForm columnId={props.id} addCard={props.addCard} />
            </h1>
        </article>
    );
}

export default Column;
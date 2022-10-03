import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(state.searchString.toLowerCase())));

    return (
        <article className={styles.column}>
            <h1 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon} />
                {props.title}
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} />)}
                </ul>
                <CardForm columnId={props.id} addCard={props.addCard} />
            </h1>
        </article>
    );
}

export default Column;
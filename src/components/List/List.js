import './List.module.scss';
import Column from '../Column/Column';
import styles from './List.module.scss';

const List = () => {
    return (
        <div>
            <header>
                <h2>Things to do <span>soon</span></h2>
                <p>Interesting things I want to check out</p>
            </header>
            <section className={styles.columns}>
                <Column title="Books" />
                <Column title="Movies" />
                <Column title="Games" />
            </section>
        </div>
    );
};

export default List;
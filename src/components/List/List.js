import './List.modules.scss';

const List = () => {
    return (
        <div>
            <header>
                <h2>Things to do<span>soon</span></h2>
                <p>Interesting things I want to check out</p>
            </header>
            <section>
                <article>
                    <h2>Books</h2>
                </article>
                <article>
                    <h2>Movies</h2>
                </article>
                <article>
                    <h2>Games</h2>
                </article>
            </section>
        </div>
    );
};

export default List;
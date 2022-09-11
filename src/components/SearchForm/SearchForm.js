import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <TextInput placeholder="Add new column" />
<<<<<<< HEAD
            <Button>
                <span className="fa fa-search" />
            </Button>
            <Button>Create</Button>
=======
            <Button text="Search" />
            <Button text="Create" />
>>>>>>> refs/remotes/origin/main
        </form>
    );
  };

export default SearchForm;
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_SEARCHSTRING', payload: value })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput onChange={handleChange} placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;
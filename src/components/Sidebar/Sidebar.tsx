import React, { ChangeEvent } from 'react';
import styles from './sidebar.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IUser, IUsers } from '../../store/reducers/usersReducer';
import useDebounce from '../../hooks/useDebounse';
import { FoundUsersList } from './components/FoundUsersList';
import { userSlice } from '../../store/reducers/userReduser';

export function Sidebar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchError, setSearchError] = React.useState('');
  const users = useAppSelector(state => state.users.users);
  const [foundUsers, setFoundUsers] = React.useState<IUser[]>([]);
  const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 500 });
  const dispatch = useAppDispatch();


  React.useEffect(() => {
    if (debouncedSearchTerm) {
      searchItems(debouncedSearchTerm);
    } else {
      setFoundUsers([]);
      dispatch(userSlice.actions.setDefualtUser());
    }
  }, [debouncedSearchTerm]);

  function searchItems(value: string) {
    if (!value){
      return;
    }
    const searchvalue = value.replaceAll(' ', '').split(',');
    console.log(searchvalue);
    const arr: IUser[] = [];
    for (const elem of searchvalue) {
      users.forEach((item) => {
        if ((item.username).toLowerCase().includes(elem.toLowerCase()) || item.id.toString().includes(elem.toLowerCase())) {
          arr.push(item)
        }
      });
    }
    if (arr.length === 0) setSearchError('ничего не найдено ')
   const foundArr = arr.filter((item, index) => {
      return arr.indexOf(item) === index
  });
    setFoundUsers(foundArr);
    console.log(foundArr);
  }


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    setSearchError('');


  }


  return (
    <aside className={styles.aside}>
      <form action="" className={styles.aside__form}>
        <fieldset className={styles.aside__form_fieldset}>
          <legend className={styles.aside__form_legend}>Поиск сотрудников</legend>
          <input
            className={styles.aside__form_input}
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder='Введите Id или имя '
          />
        </fieldset>
      </form>
      <div className={styles.aside__search_results_block}>
        <h2 className={styles.aside__search_results_block_title}>Результаты</h2>
        <div className={styles.aside__search_results}>
          {foundUsers.length
            ?
           <FoundUsersList list={foundUsers}/>
            :
            searchError
              ?
              <span className={styles.aside__search_results_value}>{searchError}</span>
              :
              <span className={styles.aside__search_results_value}>начните поиск</span>
          }
        </div>
      </div>
    </aside>
  );
}
function setDefualtUser(): any {
  throw new Error('Function not implemented.');
}


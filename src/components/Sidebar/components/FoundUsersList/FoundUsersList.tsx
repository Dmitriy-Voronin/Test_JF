import React from 'react';
import styles from './founduserslist.scss';
import { IUser } from '../../../../store/reducers/usersReducer';
import { nanoid } from 'nanoid';
import { FoundUsersListItem } from '../FoundUsersListItem';


interface IFoundUsersListProps {
  list: IUser[],
}

export function FoundUsersList({ list }: IFoundUsersListProps) {

const userList = React.useMemo(() => list.map((item) => ({...item, key: nanoid()})), [list])

  return (
    <>
     {list &&
      <ul className={styles.found_list}>
        {userList.map(item => (
            <FoundUsersListItem user={item} key={item.key}/>
        ))}
      </ul>
    }
    </>

  );
}

import React from 'react';
import styles from './founduserslistitem.scss';
import plug from '../../../../../assets/images/listItem_plug.png';
import { IUser } from '../../../../store/reducers/usersReducer';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchUserInfo, userSlice } from '../../../../store/reducers/userReduser';

interface IFoundUsersListItemProps {
  user: IUser,
  key?: string
}

export function FoundUsersListItem({ user }: IFoundUsersListItemProps) {
  const dispatch = useAppDispatch();
  const currentId = useAppSelector(state => state.user.currentId);

  function handleClick(id: number) {
    dispatch(fetchUserInfo(id))
    dispatch(userSlice.actions.setCurrentId(id));
  }

  return (
    <li className={styles.list_item} onClick={() => handleClick(user.id)}>
      <img src={plug} alt="plug" />
      <div className={`${styles.list_item__content} ${currentId === user.id && styles.list_item__content_active}`}>
        <span className={styles.list_item__content_title}>{user.username}</span>
        <span className={styles.list_item__content_email}>{user.email}</span>
      </div>
    </li>
  );
}

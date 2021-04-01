import React from 'react';
import styles from './MembersList.module.css';
// import sprite from '../../icons/symbol-defs.svg';
// import MembersListItem from '../membersListItem/MembersListItem';
import DeleteButton from '../../shared/deleteButton/DeleteButton';

const MembersList = ({ members }) => {
  // if (!members.length) {
  //   <p className={styles.message}>You have not added any users yet</p>;
  // }
  // <p className={styles.addedMembers}> Added users: members.length </p>;

  return (
    <div className={styles.container}>
      <p className={styles.message}>You have not added any users yet</p>
      <ul className={styles.membersList}>
        <li className={styles.membersListItem}>
          <p className={styles.membersListItem}>username@gmail.com</p>
          <DeleteButton />
        </li>
        {/* {members.map(({ id, email }) => (
          <MembersListItem key={id} id={id} email={email} />
        ))} */}
      </ul>
    </div>
  );
};

export default MembersList;

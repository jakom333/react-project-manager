import React from 'react';
import styles from './MembersList.module.css';
import MembersListItem from '../membersListItem/MembersListItem';
import { nanoid } from 'nanoid';

const MembersList = ({ members }) => {
  let id = nanoid();
  return (
    <div className={styles.container}>
      <p className={styles.addedMembers}> Total members: {members.length}</p>
      {/* {!!members.length && (
        <p className={styles.message}>You have added no users yet</p>
      )} */}
      <ul className={styles.membersList}>
        {members.map((member, idx) => (
          <MembersListItem member={member} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default MembersList;

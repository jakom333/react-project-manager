import React from 'react';
import styles from './MembersList.module.css';
import MembersListItem from '../membersListItem/MembersListItem';

const MembersList = ({ members }) => {
  return (
    <div className={styles.container}>
      <p className={styles.addedMembers}> Total members: {members.length}</p>
      {/* {!!members.length && (
        <p className={styles.message}>You have added no users yet</p>
      )} */}
      <ul className={styles.membersList}>
        {members.map(member => (
          <MembersListItem member={member} />
        ))}
      </ul>
    </div>
  );
};

export default MembersList;

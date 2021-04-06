import React from 'react';
import styles from './MembersList.module.css';
import MembersListItem from '../membersListItem/MembersListItem';

const MembersList = ({ members }) => {
  return (
    <div className={styles.container}>
      <p className={styles.addedMembers}> Total members: {members.length}</p>
      <ul className={styles.membersList}>
        {members.map((member, idx) => (
          <MembersListItem member={member} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default MembersList;

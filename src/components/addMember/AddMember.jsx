import { useState } from 'react';
import styles from './AddMember.module.css';

const initialState = {
  email: '',
};

const AddMember = () => {
  const [member, setMember] = useState(initialState);

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.email);

    setMember({
      email: '',
    });
  };

  return (
    // <Modal>
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Add new project member</h2>
      <div onSubmit={handleSubmit} className={styles.memberForm}>
        <input
          className={styles.input}
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChange}
          value={member.email}
        />
        <p className={styles.addedMembers}> Added users: </p>
        <p className={styles.message}>You have not added any users yet</p>
        <button type="submit" className={styles.btn}>
          Add project member
        </button>
      </div>
    </div>
  );
};

export default AddMember;

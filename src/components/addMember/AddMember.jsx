import { useState } from 'react';
import CancelButton from '../../shared/cancelButton/CancelButton';
import MembersList from '../membersList/MembersList';
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
      <form onSubmit={handleSubmit} className={styles.memberForm}>
        <input
          className={styles.input}
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChange}
          value={member.email}
        />
        <MembersList />
        <button type="submit" className={styles.btn}>
          Add member
        </button>
      </form>
      <CancelButton />
    </div>
  );
};

export default AddMember;

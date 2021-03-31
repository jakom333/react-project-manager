import { useState } from 'react';
import Button from '../../shared/button';
import CancelButton from '../../shared/cancelButton/CancelButton';
import MainModal from '../../shared/mainModal/MainModal';
import MembersList from '../membersList/MembersList';
import styles from './AddMember.module.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { container } from '../../container.module.css';

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
    // <MainModal>
    <div className={container}>
      <h2 className={styles.titleForm}>Add new project member</h2>
      <form onSubmit={handleSubmit} className={styles.memberForm}>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={handleChange}
            value={member.email}
          />
          <label htmlFor="email" className={styles.formLabel}>
            E-mail
          </label>
        </div>
        <MembersList />
        <Button>Done</Button>
      </form>
      <CancelButton />
    </div>
    // </MainModal>
  );
};

export default AddMember;

import MembersList from '../membersList/MembersList';
import styles from './AddMember.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('* Email is a required field')
    .email('* Email must be valid'),
});

const AddMember = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.titleForm}>Add new project member</h2>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          //setError
          // alert(JSON.stringify(values, null, 2));
          resetForm({ email: '' });
          //addMember//
        }}
      >
        <Form className={styles.memberForm}>
          {/* <div className={styles.formGroup}> */}
          <Field
            className={styles.input}
            name="email"
            type="text"
            placeholder="E-mail"
          />

          <ErrorMessage
            className={styles.error}
            component="span"
            name="email"
          />
          {/* <label htmlFor="email" className={styles.formLabel}>
            E-mail
          </label> */}
          {/* </div> */}
        </Form>
      </Formik>
      <MembersList />
    </div>
  );
};

export default AddMember;

// const AddMember = () => {
//   const [member, setMember] = useState(initialState);

//   const handleChange = event => {
//     setMember({ ...member, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(member.email);

//     setMember({
//       email: '',
//     });
//   };

//   return (
//     // <MainModal>
//     <div className={styles.formContainer}>
//       <h2 className={styles.titleForm}>Add new project member</h2>
//       <form onSubmit={handleSubmit} className={styles.memberForm}>
//         <div className={styles.formGroup}>
//           <input
//             className={styles.input}
//             name="email"
//             type="text"
//             placeholder="E-mail"
//             onChange={handleChange}
//             value={member.email}
//           />
//           <label htmlFor="email" className={styles.formLabel}>
//             E-mail
//           </label>
//         </div>
//         <MembersList />
//         <Button>Done</Button>
//       </form>
//       <CancelButton />
//     </div>
//     // </MainModal>
//   );
// };

// export default AddMember;

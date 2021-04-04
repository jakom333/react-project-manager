import MembersList from '../membersList/MembersList';
import styles from './AddMember.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addMember } from '../../redux/projects/projects-operations';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsSelector } from '../../redux/projects/projects-selectors';
import Button from '../../shared/button/Button';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('* Email is a required field')
    .email('* Email must be valid'),
});

const AddMember = () => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsSelector);
  const members = projects.find(item => item._id === projectId).members;

  return (
    <div>
      <div className={styles.formContainer}>
        <h2 className={styles.titleForm}>Add new project member</h2>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={formSchema}
          onSubmit={async (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            // console.log(values);

            addMember(values);
            dispatch(addMember(values, projectId));
            resetForm({});
          }}
        >
          <Form className={styles.memberForm}>
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
            {/* <button type="submit"> done </button> */}
            <MembersList members={members} />
            <Button id="form">Done</Button>
          </Form>
        </Formik>
      </div>
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

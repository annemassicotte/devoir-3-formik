import BsForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Form } from "formik";
import Input from "./Input";
import { Formik } from "formik";
import * as Yup from "yup";

export const TrialForm = () => {
	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	const validationName = /^[a-z ,.'-]+$/i;
	const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const validatePassword =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validateOnChange
			validationSchema={Yup.object({
				firstname: Yup.string()
					.matches(validationName, "Please enter a valid name")
					.required("Required field"),
				lastname: Yup.string()
					.matches(validationName, "Please enter a valid name")
					.required("Required field"),
				email: Yup.string()
					.matches(validateEmail, "Please enter a valid email")
					.required("Required field"),
				password: Yup.string()
					.matches(validatePassword, "Please enter a valid password")
					.required("Required field"),
			})}>
			<Form as={BsForm} noValidate>
				<Row className="d-flex gap-3">
					<Input type="text" placeholder="First Name" id="firstname" />
					<Input type="text" placeholder="Last Name" id="lastname" />
					<Input type="email" placeholder="Email" id="email" />
					<Input type="password" placeholder="Password" id="password" />
				</Row>

				<Button type="submit" className="mt-3 container-fluid bg-success border-success">Claim yout free trial</Button>
			</Form>
		</Formik>
	);
};

export default TrialForm;

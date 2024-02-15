import React from "react";
import { Grid, Loading, Button } from "@geist-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { registerUser } from "redux/actions/user";
import FormField from "pages/auth/FormField";

interface IInitialValues {
  username: string;
  email: string;
  password: string;
  walletAddress: string;
}

const Register: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const initialValues: IInitialValues = {
    username: "",
    email: "",
    password: "",
    walletAddress: "",
  };

  const onHandleSubmit = (values: IInitialValues, { setSubmitting }: any) => {
    dispatch(registerUser({ ...values, role: "user" }, setSubmitting));
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Invalid username!"),
    email: Yup.string().email("Invalid email!").required("Invalid email!"),
    password: Yup.string().required("Invalid password!"),
    walletAddress: Yup.string().required("Wallet address is required"),
  });

  React.useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <Grid.Container
      gap={2}
      justify="center"
      alignItems="center"
      direction="column"
      height="100vh"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <FormField isRegister={true} />
            <Button disabled={isSubmitting}>
              <button type="submit">
                {isSubmitting ? <Loading>Loading</Loading> : "Register"}
              </button>
            </Button>
          </Form>
        )}
      </Formik>
    </Grid.Container>
  );
};

export default Register;

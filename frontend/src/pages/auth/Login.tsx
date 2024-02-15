import React from "react";
import { Grid, Loading, Button } from "@geist-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { loginUser } from "redux/actions/user";
import FormField from "pages/auth/FormField";

interface IInitialValues {
  username: string;
  password: string;
}

const Login: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const initialValues: IInitialValues = {
    username: "",
    password: "",
  };

  const onHandleSubmit = (values: IInitialValues, { setSubmitting }: any) => {
    dispatch(loginUser(values, setSubmitting));
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Invalid username!"),
    password: Yup.string().required("Invalid password!"),
  });

  React.useEffect(() => {
    document.title = "Login";
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
            <FormField />
            <Button disabled={isSubmitting}>
              <button type="submit">
                {isSubmitting ? <Loading>Loading</Loading> : "Login"}
              </button>
            </Button>
          </Form>
        )}
      </Formik>
    </Grid.Container>
  );
};

export default Login;

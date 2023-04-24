import { useNavigate } from "react-router-dom";
import  LoadingButton  from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import TextField from "@mui/material/TextField";
import { H1 } from "@/components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { saveNewUser } from "@/redux/features/users/userSlice";
import {  useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Button from "@/components/Button";
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const UserCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);

  

  const initialValues = {
    firstName: "",
    lastName: "",
    firstSurname: "",
    lastSurname: "",
    numberOfIdentity: "",
    email: "",
    numberPhone: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("El Nombre es Requerido!"),
    lastSurname: Yup.string().required("El Apellido es Requerido!"),
    numberOfIdentity: Yup.string().required("La Cedula es Requerida!"),
    email: Yup.string().email().required("El Email es Requerido!"),
    numberPhone: Yup.number().required("El Celular es Requerido!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (value) => {
      const payload = {
        firstName: value.firstName,
        lastName: value.lastName,
        firstSurname: value.lastSurname,
        lastSurname: value.lastSurname,
        numberOfIdentity: value.numberOfIdentity,
        email: value.email,
        numberPhone: value.numberPhone,
      };
      setLoading(true);
      dispatch(saveNewUser(payload))
        .unwrap()
        .then(() => {
          navigate("/admin/users");
          toast.success("You registered successfully");
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
  });

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <H1 fontSize={40} fontWeight={700}>
          Crear Usuario
        </H1>
        <Box
          noValidate
          maxWidth="43rem"
          width="100%"
          sx={{
            backgroundColor: "#ffffff",
            p: { xs: "2rem", sm: "2rem" },
            borderRadius: 2,
            mt: 4,
          }}
        >
          <Grid item md={8} xs={12}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={12} xs={12}>
                  <TextField
                    fullWidth
                    name="numberOfIdentity"
                    type="number"
                    placeholder="Cedula"
                    value={values.numberOfIdentity}
                    onChange={handleChange}
                    error={Boolean(
                      touched.numberOfIdentity && errors.numberOfIdentity
                    )}
                    helperText={
                      touched.numberOfIdentity && errors.numberOfIdentity
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="firstName"
                    placeholder="Primer Nombre"
                    value={values.firstName}
                    onChange={handleChange}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="lastName"
                    placeholder="Segundo Nombre"
                    value={values.lastName}
                    onChange={handleChange}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="lastSurname"
                    placeholder="Primer Apellido"
                    value={values.lastSurname}
                    onChange={handleChange}
                    error={Boolean(touched.lastSurname && errors.lastSurname)}
                    helperText={touched.lastSurname && errors.lastSurname}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    name="firstSurname"
                    placeholder="Segundo Apellido"
                    value={values.firstSurname}
                    onChange={handleChange}
                    error={Boolean(touched.firstSurname && errors.firstSurname)}
                    helperText={touched.firstSurname && errors.firstSurname}
                  />
                </Grid>

                <Grid item sm={12} xs={12}>
                  <TextField
                    fullWidth
                    name="numberPhone"
                    type="number"
                    placeholder="Celular"
                    value={values.numberPhone}
                    onChange={handleChange}
                    error={Boolean(touched.numberPhone && errors.numberPhone)}
                    helperText={touched.numberPhone && errors.numberPhone}
                  />
                </Grid>

                <Grid item sm={12} xs={12}>
                  <TextField
                    fullWidth
                    name="email"
                    placeholder="Correo"
                    value={values.email}
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>


                <Grid item xs={12} mt={1}>
                  {loading ? (
                    <LoadingButton loading fullWidth variant="contained">
                     CREAR USUARIO
                    </LoadingButton>
                  ) : (
                    <Button fullWidth type="submit" variant="contained">
                     CREAR USUARIO
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default UserCreation;

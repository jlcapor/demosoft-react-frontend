import { Link } from "react-router-dom";

// material-ui
import { Grid, Stack, Typography } from "@mui/material";

import AuthLogin from "./auth-forms/AuthLogin";
import AuthWrapper from "./AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack  direction="row" justifyContent="center" alignItems= "center" sx={{ mb: { xs: -0.5, sm: 0.5 }}}>
                <Typography variant="h2">Login</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthLogin />
            </Grid>
        </Grid>
    </AuthWrapper>
  );
};

export default Login;

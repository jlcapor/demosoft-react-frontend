import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Grid, Stack, Typography } from '@mui/material';
import AuthForgotPassword from './auth-forms/AuthForgotPassword';
import AuthWrapper from './AuthWrapper';
const ForgotPassword = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AuthWrapper>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Forgot Password</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AuthForgotPassword />
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={matchDownSM ? 1 : 2} justifyContent="space-around" alignItems="center" sx={{ '& .MuiButton-startIcon': { mr: matchDownSM ? 0 : 1, ml: matchDownSM ? 0 : -0.5 } }} >
                        <Typography component={Link} to="/" variant="body1"  color="primary" >
                            Already have an account?
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default ForgotPassword;

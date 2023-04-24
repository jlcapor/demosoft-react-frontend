import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';
import MainCard from '@/components/cards/MainCard';

// project import

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const AuthCard = ({ children, ...other }) => (
    <MainCard
        sx={{
            maxWidth: { xs: 400, lg: 492 },
            margin: { xs: 2.5, md: 2 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        content={false}
        {...other}
        border={false}
        boxShadow
    >
        <Box mt={3} sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
            {children}
        </Box>
    </MainCard>
);

AuthCard.propTypes = {
    children: PropTypes.node
};

export default AuthCard;

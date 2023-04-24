import { Box, styled, Typography } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const HomePage = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#ece9e9",
          mt: "3rem",
          height: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "#1f1e1e", fontWeight: 500 }}
        >
          Home Page
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;

import useAuth from '@/hooks/useAuth';
import Loader from '@/components/Loader';
// import { flat } from 'app/utils/utils';
import { Navigate, useLocation } from 'react-router-dom';
// import AllPages from '../routes';

// const userHasPermission = (pathname, user, routes) => {
//   if (!user) {
//     return false;
//   }
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length ? matched.auth.includes(user.role) : true;
//   return authenticated;
// };

const AuthGuard = ({ children }) => {
  const { auth, cargando } = useAuth();
  const { pathname } = useLocation();


  if(cargando) return <Loader/>
  

  //   const routes = flat(AllPages);

  //   const hasPermission = userHasPermission(pathname, user, routes);
  //   let authenticated = isAuthenticated && hasPermission;

  // // IF YOU NEED ROLE BASED AUTHENTICATION,
  // // UNCOMMENT ABOVE LINES
  // // AND COMMENT OUT BELOW authenticated VARIABLE


  return (
    <>
      {auth.id ? (
        children
      ) : (
        <Navigate replace to="/" state={{ from: pathname }} />
      )}
    </>
  );
};

export default AuthGuard;
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent: React.FC<P> = (props: P) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuthentication = () => {
        // Verifica se tem um token no local storage
        return !!localStorage.getItem("token");
      };

      const isAuth = checkAuthentication();

      setIsAuthenticated(isAuth);

      if (!isAuth) {
        router.replace("/login");
      }
    }, []);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return WithAuthComponent;
};

export default withAuth;

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../../api/index";
import React, { useEffect, useState } from "react";
import LoginForm from "../components/Admin/LoginForm/login";
import Loading from "../components/Loading/loading";


const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent: React.FC<P> = (props: P) => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isAuth, setIsAuh] = useState(false)


    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
        setLoading(false);
        setIsAuh(true)
      } else {
        setUser(null);
        setLoading(false);
        setIsAuh(false)
      }
    });

    if (loading) {
      return (
        <Loading />
      )
    }

    return isAuth ? <WrappedComponent {...props} /> : <LoginForm />;
  };

  return WithAuthComponent;
};

export default withAuth;

import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";

// import { Container } from './styles';

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();
  const { push } = useHistory();

  return (
    <button
      onClick={async () => {
        await signIn("pedrob", "cccc1234");
        push("/");
      }}
    >
      entrar
    </button>
  );
};

export default LoginPage;

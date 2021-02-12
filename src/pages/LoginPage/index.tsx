import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";

import { Container, Input, InputButton, Form, RegisterLink } from "./styles";

interface Inputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();
  const { push } = useHistory();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    console.log(data);
    await signIn("pedrob", "cccc1234");
    push("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="username"
          defaultValue=""
          placeholder="Nome de usuário"
          ref={register({
            required: true
          })}
        />
        {errors.username && errors.username.type === "required" && (
          <span>Padrão de username inválido</span>
        )}
        <Input
          name="password"
          defaultValue=""
          placeholder="Senha"
          type="password"
          ref={register({
            required: true
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span>Padrão de password inválido</span>
        )}
        <RegisterLink to="/registrar">
          Não possui conta, registre-se aqui
        </RegisterLink>
        <InputButton type="submit" value="Login" />
      </Form>
    </Container>
  );
};

export default LoginPage;

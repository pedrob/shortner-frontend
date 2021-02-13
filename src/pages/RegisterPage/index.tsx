import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";

import { Container, Input, InputButton, Form, LoginLink, Logo } from "./styles";

interface Inputs {
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const { signIn } = useAuth();
  const { push } = useHistory();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    console.log(data);
    // await signIn('pedrob', 'cccc1234');
    // push('/');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          Shortner
          <span>Encurtador de links</span>
        </Logo>
        <Input
          name="username"
          defaultValue=""
          placeholder="Nome de usuário"
          ref={register({
            required: true
          })}
        />
        <Input
          name="password"
          defaultValue=""
          placeholder="Senha"
          type="password"
          ref={register({
            required: true
          })}
        />
        <Input
          name="confirmPassword"
          defaultValue=""
          placeholder="Confirmar senha"
          type="password"
          ref={register({
            required: true
          })}
        />
        <LoginLink to="/login">Já possui conta, entre aqui</LoginLink>
        <InputButton type="submit" value="Cadastrar" />
      </Form>
    </Container>
  );
};

export default RegisterPage;

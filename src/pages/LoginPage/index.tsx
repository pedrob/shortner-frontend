import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";

import {
  Container,
  Input,
  InputButton,
  Form,
  RegisterLink,
  Logo
} from "./styles";

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
        <Logo>
          Shortner
          <span>Encurtador de links</span>
        </Logo>
        <Input
          className={errors.username ? "error" : ""}
          name="username"
          defaultValue=""
          placeholder="Nome de usuário"
          ref={register({
            required: true,
            min: 4,
            max: 20
          })}
        />
        {errors.username && errors.username.type === "required" && (
          <span className="errorText">Campo obrigatório</span>
        )}
        {errors.username && errors.username.type === "min" && (
          <span className="errorText">
            Nome de usuário muito curto (menor que 4)
          </span>
        )}
        {errors.username && errors.username.type === "max" && (
          <span className="errorText">
            Nome de usuário muito longo (maior que 20)
          </span>
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

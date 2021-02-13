import React from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";

import {
  Container,
  Input,
  InputButton,
  Form,
  LoginLink,
  Logo,
  LogoIcon
} from "./styles";

interface Inputs {
  username: string;
  password: string;
  confirmPassword?: string;
}

const RegisterPage: React.FC = () => {
  const { signUp } = useAuth();
  const { push } = useHistory();
  const { register, handleSubmit, errors, getValues } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    delete data.confirmPassword;
    await signUp(data.username, data.password);
    push("/login");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo>
          <div>
            <LogoIcon />
            Shortner
          </div>
          <span>Encurtador de links</span>
        </Logo>
        <Input
          className={errors.username ? "error" : ""}
          name="username"
          defaultValue=""
          placeholder="Nome de usuário"
          ref={register({
            required: true,
            minLength: 4,
            maxLength: 20
          })}
        />
        {errors.username && errors.username.type === "required" && (
          <span className="errorText">Campo obrigatório</span>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <span className="errorText">
            Nome de usuário muito curto (menor que 4)
          </span>
        )}
        {errors.username && errors.username.type === "maxLength" && (
          <span className="errorText">
            Nome de usuário muito longo (maior que 20)
          </span>
        )}
        <Input
          className={errors.password ? "error" : ""}
          name="password"
          defaultValue=""
          placeholder="Senha"
          type="password"
          ref={register({
            required: true,
            minLength: 6
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="errorText">Campo obrigatório</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span className="errorText">Senha muito curta (menor que 6)</span>
        )}
        <Input
          className={errors.confirmPassword ? "error" : ""}
          name="confirmPassword"
          defaultValue=""
          placeholder="Confirmar senha"
          type="password"
          ref={register({
            required: true,
            validate: value => value === getValues("password")
          })}
        />
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <span className="errorText">Campo obrigatório</span>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <span className="errorText">Senha diferente</span>
          )}
        <LoginLink to="/login">Já possui conta, entre aqui</LoginLink>
        <InputButton type="submit" value="Cadastrar" />
      </Form>
    </Container>
  );
};

export default RegisterPage;

import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  Container,
  Input,
  InputButton,
  Form,
  RegisterLink,
  Logo,
  LogoIcon,
  WaitingButton
} from "./styles";

interface Inputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [fetchState, setFetchState] = useState<"initial" | "loading">(
    "initial"
  );
  const { signIn } = useAuth();
  const { push } = useHistory();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = async (data: Inputs) => {
    try {
      setFetchState("loading");
      await signIn(data.username, data.password);
      push("/");
    } catch (error) {
      toast.error("Credenciais inválidas");
      setFetchState("initial");
    }
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
        <RegisterLink to="/registrar">
          Não possui conta, registre-se aqui
        </RegisterLink>
        {fetchState === "initial" && (
          <InputButton type="submit" value="Login" />
        )}
        {fetchState === "loading" && (
          <WaitingButton type="submit" value="Aguarde..." />
        )}
      </Form>
    </Container>
  );
};

export default LoginPage;

import React from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import UrlsList from "../../components/UrlsList";

import { Container, Content, URLBar, URLInput, URLBarButton } from "./styles";

type Inputs = {
  url: string;
};

const Home: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <Container>
      <Header />
      <Content>
        <URLBar onSubmit={handleSubmit(onSubmit)}>
          <URLInput
            name="url"
            defaultValue=""
            placeholder="Digite aqui a sua URL que será encurtada"
            ref={register({
              required: true,
              pattern: /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/
            })}
          />
          <URLBarButton type="submit" value="Encurtar" />
          {errors.url && errors.url.type === "required" && (
            <span>Campo obrigatório</span>
          )}
          {errors.url && errors.url.type === "pattern" && (
            <span>Padrão de URL inválido</span>
          )}
        </URLBar>
        <span className="urlsSectionTitle">Minhas URLs</span>
        <UrlsList
          urls={[
            {
              hash: "sjand",
              originalURL: "https://google.com",
              createdAt: Date.now().toString()
            },
            {
              hash: "sjbnd",
              originalURL: "https://facebook.com",
              createdAt: Date.now().toString()
            }
          ]}
        />
      </Content>
    </Container>
  );
};

export default Home;

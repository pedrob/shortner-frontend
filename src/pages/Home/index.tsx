import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import UrlsList from "../../components/UrlsList";

import {
  Container,
  Content,
  URLBar,
  URLInput,
  URLBarButton,
  URLsNotFound
} from "./styles";

import api from "../../services/api";

type Inputs = {
  url: string;
};

type Url = {
  hash: string;
  originalURL: string;
  createdAt: string;
};

const Home: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();
  const [urls, setUrls] = useState<Url[] | []>([]);
  const [fetchState, setFetchState] = useState<
    "initial" | "loading" | "resolved"
  >("initial");

  const onSubmit = async (dataForm: Inputs) => {
    if (dataForm.url.includes("https://") || dataForm.url.includes("http://")) {
      const { data } = await api.post("/urls", {
        originalURL: dataForm.url
      });
      setUrls([...urls, data]);
      reset();
    } else {
      dataForm.url = "https://" + dataForm.url;
      const { data } = await api.post("/urls", {
        originalURL: dataForm.url
      });
      setUrls([...urls, data]);
      reset();
    }
    // 	;
  };

  useEffect(() => {
    setFetchState("loading");
    const getURLs = async () => {
      const { data } = await api.get("/urls");
      const urls = data.content;
      setUrls(urls);
      setFetchState("resolved");
    };
    getURLs();
  }, []);

  const removeUrl = async (hash: string) => {
    await api.delete(`/urls/${hash}`);
    setUrls(urls.filter(url => url.hash !== hash));
  };

  return (
    <Container>
      <Header />
      <Content>
        <URLBar onSubmit={handleSubmit(onSubmit)}>
          <URLInput
            className={errors.url ? "error" : ""}
            name="url"
            defaultValue=""
            placeholder="Digite aqui a sua URL que será encurtada"
            ref={register({
              required: true,
              pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
            })}
          />
          <URLBarButton type="submit" value="Encurtar" />
        </URLBar>
        {errors.url && errors.url.type === "required" && (
          <span className="errorText">Campo obrigatório</span>
        )}
        {errors.url && errors.url.type === "pattern" && (
          <span className="errorText">Padrão de URL inválido</span>
        )}
        <span className="urlsSectionTitle">Minhas URLs</span>
        {fetchState === "resolved" && urls.length > 0 && (
          <UrlsList removeUrl={removeUrl} urls={urls} />
        )}
        {fetchState === "resolved" && urls.length === 0 && (
          <URLsNotFound>Você não possui URLs registradas</URLsNotFound>
        )}
      </Content>
    </Container>
  );
};

export default Home;

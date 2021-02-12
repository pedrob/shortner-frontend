import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input``;

export const InputButton = styled.input``;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

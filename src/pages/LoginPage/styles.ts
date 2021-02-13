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
  background-color: var(--blue);
  width: 500px;
  padding: 40px 80px;
  border-radius: 4px;
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 50px;
  letter-spacing: 1.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 15px;
  }
`;

export const Input = styled.input`
  padding: 8px 5px;
  border: 1px solid var(--l-gray);
  border-radius: 4px;
  margin-top: 15px;
`;

export const InputButton = styled.input`
  background: var(--d-blue);
  padding: 8px 5px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 15px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background: var(--dh-blue);
  }
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: var(--l-gray);
  margin-top: 10px;
  :hover {
    color: #fff;
  }
`;

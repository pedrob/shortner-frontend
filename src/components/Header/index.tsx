import React from "react";
import { useAuth } from "../../hooks/auth";
import { useHistory } from "react-router";

import { Container, Logo, LogoutButton, UserSection } from "./styles";

const Header: React.FC = () => {
  const { signOut } = useAuth();
  const { push } = useHistory();

  return (
    <Container>
      <Logo />
      <UserSection>
        <span>user</span>
        <LogoutButton
          onClick={() => {
            signOut();
            push("/login");
          }}
        >
          sair
        </LogoutButton>
      </UserSection>
    </Container>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";

import {
  Container,
  Logo,
  LogoutButton,
  UserSection,
  LogoutIcon,
  LogoIcon
} from "./styles";

const Header: React.FC = () => {
  const { signOut, getToken } = useAuth();
  const { push } = useHistory();
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const { sub } = jwt_decode<{ sub: string }>(getToken());
    setUsername(sub);
  }, []);

  return (
    <Container>
      <Logo>
        <div>
          <LogoIcon />
          Shortner
        </div>
        <span>Encurtador de links</span>
      </Logo>
      <UserSection>
        <span>{username}</span>
        <LogoutButton
          onClick={() => {
            signOut();
            push("/login");
          }}
        >
          <LogoutIcon />
          sair
        </LogoutButton>
      </UserSection>
    </Container>
  );
};

export default Header;

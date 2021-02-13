import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { MdShortText } from "react-icons/md";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 20px;
  letter-spacing: 1.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 8px;
  }
`;

export const LogoIcon = styled(MdShortText)`
  color: #fff;
`;

export const UserSection = styled.section`
  display: flex;
  align-items: center;
  span {
    color: var(--l-gray);
    font-size: 16px;
    margin-right: 20px;
  }
`;

export const LogoutButton = styled.button`
  background: var(--l-blue);
  padding: 4px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  :hover {
    background: var(--h-blue);
  }
`;

export const LogoutIcon = styled(AiOutlineLogout)`
  color: #fff;
  margin-right: 5px;
`;

import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const UrlInfo = styled.li`
  width: 100%;
  height: 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--d-gray);
    overflow: hidden;
    width: 32%;

    span:first-child {
      color: var(--d-blue);
      margin-bottom: 6px;
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: var(--d-gray);
      :hover {
        color: var(--blue);
      }
      overflow: hidden;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;

export const CustomBsTrash = styled(BsTrash)`
  color: red;
  position: absolute;
  font-size: 20px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

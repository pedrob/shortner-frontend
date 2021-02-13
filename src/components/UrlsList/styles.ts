import styled from "styled-components";

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
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--d-gray);
    overflow: hidden;

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
      width: 300px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;

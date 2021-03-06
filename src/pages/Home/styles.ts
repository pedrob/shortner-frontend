import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  margin-top: 80px;
  padding: 20px 40px;
  .urlsSectionTitle {
    color: var(--d-gray);
    margin-top: 30px;
  }
  @media (max-width: 599px) {
    margin-top: 20px;
  }
`;

export const URLBar = styled.form`
  width: 100%;
  display: flex;
  border: none;
  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

export const URLInput = styled.input`
  width: 100%;
  padding: 8px 5px;
  border: 1px solid var(--l-gray);
  border-radius: 4px;

  @media (max-width: 599px) {
    font-size: 10px;
  }
`;

export const URLBarButton = styled.input`
  margin-left: 2px;
  border: none;
  border-radius: 4px;
  background: var(--l-blue);
  color: #fff;
  padding: 4px;
  cursor: pointer;
  :hover {
    background: var(--h-blue);
  }

  @media (max-width: 599px) {
    margin-top: 10px;
    padding: 5px;
  }
`;

export const URLsNotFound = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  color: var(--d-blue);
  font-weight: bold;
  @media (max-width: 599px) {
    padding: 0 10px;
    text-align: center;
  }
`;

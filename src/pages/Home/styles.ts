import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1024px;
  background-color: gray;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-direction: column;
  margin-top: 30px;
  .urlsSectionTitle {
    color: red;
  }
`;

export const URLBar = styled.form`
  width: 100%;
  display: flex;
`;

export const URLInput = styled.input`
  width: 100%;
`;

export const URLBarButton = styled.input``;

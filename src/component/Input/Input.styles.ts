import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 12px 16px;
  font-size: 16px;
  color: black;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
  }

  &::placeholder {
    color: #999;
    font-style: italic;
  }
`;

export default {
  Input
};
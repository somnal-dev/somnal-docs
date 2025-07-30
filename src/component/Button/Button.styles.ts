import styled from "@emotion/styled";

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background-color: #0056b3;
    }

    &:active {
      background-color: #004085;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
`;

export default {
  Button
};
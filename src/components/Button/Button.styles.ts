import styled from 'styled-components';

interface StyledButtonProps {
  margin?: string;  // ��������� ��������� margin
  padding?: string;  // ��������� ��������� padding
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 150px;
  height: 50px;
  background-color: #00A3FF;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: ${({ padding }) => padding || '0'};  // ��������� padding
  margin: ${({ margin }) => margin || '0'};  // ��������� margin

  &:hover {
    background-color: #008BCC;
  }

  &:active {
    background-color: #0071A1;
  }

  &:focus {
    outline: none;
  }
`;

export {};
import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
  padding?: string;  // Добавляем поддержку padding
  margin?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, margin, padding }) => {
  return (
    <StyledButton onClick={onClick} margin={margin} padding={padding}>
      {text}
    </StyledButton>
  );
};

export default Button;
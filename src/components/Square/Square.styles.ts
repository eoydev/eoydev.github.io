import styled from 'styled-components';

interface StyledSquareProps {
  width: number;
  height: number;
  margin?: string;  // Добавляем поддержку margin
  padding?: string;  // Добавляем поддержку padding
}


export const StyledSquare = styled.div<StyledSquareProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #242424;
  border-radius: 15px;
  padding: ${({ padding }) => padding || '0'};  // Применяем padding
  margin: ${({ margin }) => margin || '0'};  // Применяем margin
`;
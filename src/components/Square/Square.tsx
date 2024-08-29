// Square.tsx

import React from 'react';

interface SquareProps {
  width: number;
  height: number;
  padding: string;
  margin: string;
  children?: React.ReactNode; // ��������� ���������� �������� ��������
}

const Square: React.FC<SquareProps> = ({ width, height, padding, margin, children }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: padding,
        margin: margin,
        backgroundColor: 'blue', // ������� ������ ���� ����
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {children} {/* ���������� �������� �������� */}
    </div>
  );
};

export default Square;
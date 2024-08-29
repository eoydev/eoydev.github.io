import React from 'react';
import Square from '../Square'; // ���� � Square ������������ ����� Nav
import Button from '../Button'; // ���� � Button ������������ ����� Nav

const Nav: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row', // ����������� �������� �������������
      alignItems: 'center', // ���������� �������� �� ���������
      justifyContent: 'center', // ���������� �������� �� �����������
      width: '100%' // ����������� Nav �� ��� ������
    }}>
      {/* ������������� ������� ��� ���������� Square */}
      <Square width={300} height={50} padding="10px" margin="10px" />
      {/* �� ������ �������� ������ ��������, ����� ��� ������ ��� ������ */}
    </div>
  );
};

export default Nav;
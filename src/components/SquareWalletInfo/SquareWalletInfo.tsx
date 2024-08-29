// SquareWalletInfo.tsx

import React from 'react';
import Square from '../Square'; // ����������� Square
import { useTonAddress } from '@tonconnect/ui-react'; // ��� ��� ��������� ������ ��������

const SquareWalletInfo: React.FC = () => {
  const userFriendlyAddress = useTonAddress(); // �������� ����� �������� � ������������� �������

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Square width={300} height={100} padding="10px" margin="20px">
        <div style={{ color: 'white', textAlign: 'center', lineHeight: '100px' }}>
          {userFriendlyAddress ? (
            <span>{userFriendlyAddress}</span>
          ) : (
            <span>No wallet connected</span>
          )}
        </div>
      </Square>
    </div>
  );
};

export default SquareWalletInfo;
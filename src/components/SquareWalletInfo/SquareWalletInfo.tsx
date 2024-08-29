// SquareWalletInfo.tsx

import React from 'react';
import Square from '../Square'; // Импортируем Square
import { useTonAddress } from '@tonconnect/ui-react'; // Хук для получения адреса кошелька

const SquareWalletInfo: React.FC = () => {
  const userFriendlyAddress = useTonAddress(); // Получаем адрес кошелька в удобочитаемом формате

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
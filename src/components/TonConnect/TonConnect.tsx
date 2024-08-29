import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const TonConnect: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <TonConnectButton
        style={{ float: 'right' }} // Позиционируем кнопку справа
      />
    </div>
  );
};

export default TonConnect;
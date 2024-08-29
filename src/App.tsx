import React from 'react';
import Button from './components/Button'; // ���� � Button
import Square from './components/Square'; // ���� � Square
import BlockMain from './components/Block/BlockMain'; // ���� � BlockMain
import Nav from './components/Nav'; // ���� � Nav
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import TonConnect from './components/TonConnect'; // ���� � TonConnect
import SquareWalletInfo from './components/SquareWalletInfo'; // ����������� �� index.ts


function App() {
  return (
   <TonConnectUIProvider manifestUrl="https://github.com/ton-connect/demo-telegram-bot/blob/master/tonconnect-manifest.json">
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' // ������������� ����������� ������ �� 100% ������ �������� ����
    }}>
      <div style={{ 
        flex: '1', // ���� ���� �������� �� ��������� ������������ ����� ������ � �����
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '50px'
      }}>
        <TonConnect />
        <Square width={300} height={100} padding="10px" margin="20px" />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <BlockMain />
          <BlockMain />
        </div>
        <Square width={300} height={100} padding="10px" margin="20px" />
      </div>
      <Nav /> {/* Nav ����� ���������� ����� ��������� ���������� */}
    </div>
  </TonConnectUIProvider>
  );
}

export default App;
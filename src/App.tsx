import React from 'react';
import Button from './components/Button'; // Путь к Button
import Square from './components/Square'; // Путь к Square
import BlockMain from './components/Block/BlockMain'; // Путь к BlockMain
import Nav from './components/Nav'; // Путь к Nav
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import TonConnect from './components/TonConnect'; // Путь к TonConnect
import SquareWalletInfo from './components/SquareWalletInfo'; // Импортируем из index.ts


function App() {
  return (
   <TonConnectUIProvider manifestUrl="https://github.com/ton-connect/demo-telegram-bot/blob/master/tonconnect-manifest.json">
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' // Устанавливаем минимальную высоту на 100% высоты видимого окна
    }}>
      <div style={{ 
        flex: '1', // Этот блок занимает всё доступное пространство между верхом и низом
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
      <Nav /> {/* Nav будет находиться внизу благодаря флексбоксу */}
    </div>
  </TonConnectUIProvider>
  );
}

export default App;
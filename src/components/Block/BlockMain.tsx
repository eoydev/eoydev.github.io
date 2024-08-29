import React from 'react';
import Square from '../Square'; // Путь к компоненту Square
import Button from '../Button'; // Путь к компоненту Button

const BlockMain: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // Размещаем элементы вертикально
      alignItems: 'center',   // Центрируем элементы по горизонтали
      justifyContent: 'center', // Центрируем элементы по вертикали
      gap: '50px' // Отступ между элементами
    }}>
      <Square width={150} height={150} padding="10px" margin="10px"/>  {/* Прямоугольник */}
      <Button text="Click Me" onClick={handleClick} />  {/* Кнопка */}
    </div>
  );
};

export default BlockMain;
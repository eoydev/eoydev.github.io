import React from 'react';
import Square from '../Square'; // Путь к Square относительно папки Nav
import Button from '../Button'; // Путь к Button относительно папки Nav

const Nav: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row', // Располагаем элементы горизонтально
      alignItems: 'center', // Центрируем элементы по вертикали
      justifyContent: 'center', // Центрируем элементы по горизонтали
      width: '100%' // Растягиваем Nav на всю ширину
    }}>
      {/* Устанавливаем размеры для компонента Square */}
      <Square width={300} height={50} padding="10px" margin="10px" />
      {/* Вы можете добавить другие элементы, такие как кнопки или ссылки */}
    </div>
  );
};

export default Nav;
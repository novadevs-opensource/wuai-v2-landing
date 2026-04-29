import React from 'react';

const PaletteBlock: React.FC = () => {
  const colors = [
    '#000000',
    '#e9e9e9',
    '#ffffff',
    '#5335fc',
    '#cefc35',
  ];

  return (
    <div className="palette flex w-full">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color h-8 flex-1"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default PaletteBlock;

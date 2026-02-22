import React from 'react';

const PaletteBlock: React.FC = () => {
  const colors = [
    '#000000', // black
    '#e9e9e9', // gray
    '#ffffff', // white
    '#5335fc', // primary purple
    '#cefc35', // green
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

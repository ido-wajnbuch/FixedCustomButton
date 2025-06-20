import React from 'react';
import { text } from 'stream/consumers';

interface CustomButtonProps {
  text: string;
  bgColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, bgColor }) => {
  return (
    <button
      style={{backgroundColor: bgColor}}>
      {text}
    </button>
  );
};

export default CustomButton;
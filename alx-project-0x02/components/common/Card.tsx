import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

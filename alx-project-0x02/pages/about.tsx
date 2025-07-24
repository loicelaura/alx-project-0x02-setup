import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default AboutPage;

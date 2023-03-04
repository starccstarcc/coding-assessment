import React from 'react';

type AppWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => (
  <div className="max-w-7xl mx-auto">{children}</div>
);

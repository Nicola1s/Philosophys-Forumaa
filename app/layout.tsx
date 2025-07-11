import React from "react";
import './globals.css';

export const metadata = {
  title: 'Philosophy Forum',
  description: 'A place to discuss philosophy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

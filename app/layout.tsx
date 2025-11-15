// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: '12タイプ診断アプリ',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <h1>12タイプ診断アプリ</h1>
        {children}
      </body>
    </html>
  );
}
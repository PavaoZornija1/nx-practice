import './global.css';

export const metadata = {
  title: 'Dispatcher',
  description: 'Admin / Internal dashboard',
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

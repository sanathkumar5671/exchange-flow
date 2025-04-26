import './globals.css';

export const metadata = {
  title: 'ExchangeFlow - Currency Converter',
  description: 'Convert Australian Dollars to major world currencies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
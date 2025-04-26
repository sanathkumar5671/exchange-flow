export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Exchange Rates</title>
        <meta name="description" content="Exchange rate application" />
      </head>
      <body className="bg-gray-50">
        <main className="min-h-screen py-8">{children}</main>
      </body>
    </html>
  );
}

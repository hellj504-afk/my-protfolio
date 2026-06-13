export const metadata = {
  title: 'Muhammad Umair',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: 'black' }}>{children}</body>
    </html>
  )
}
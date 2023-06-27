import "../styles/globals.css"

export const metadata = {
  title: 'Force Yachts',
  description: 'Force Yachts - Navegue com Luxo',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

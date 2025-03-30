import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
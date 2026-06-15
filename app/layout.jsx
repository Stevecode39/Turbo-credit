import "./globals.css";

export const metadata = {
  title: "Turbo-credit",
  description: "Turbo-credit is ready for fast, reliable deployment on Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

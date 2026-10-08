import "./globals.css";

export const metadata = {
  title: "TAYHVN Athletic",
  description: "TAYHVN Athletic — built for the work no one sees.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

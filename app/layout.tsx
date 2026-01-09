import "./globals.css";

export const metadata = {
  title: "Eventide",
  description: "A radio between worlds",
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

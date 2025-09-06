import './globals.css';

export const metadata = {
  title: "Nambike",
  description: "Revolutionizing Social Networking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
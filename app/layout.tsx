import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Umair",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "black" }}>{children}</body>
    </html>
  );
}
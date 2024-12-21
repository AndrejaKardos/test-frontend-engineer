import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Unreal Deals",
  description: "Best deals for your products!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { BookingsProvider } from "@/app/components/BookingsManager";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "house Rental",
  description: "Luxury houses rental service for discerning customers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BookingsProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Toaster/>
            <Footer />
          </div>
        </BookingsProvider>
      </body>
    </html>
  );
}

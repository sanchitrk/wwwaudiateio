import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Audiate",
  description: "The audio note app that lets you capture, explore, and amplify your creativity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

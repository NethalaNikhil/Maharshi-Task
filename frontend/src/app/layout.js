import "./globals.css"; // loads taiwind css entire app
import Navbar from "@/components/Navbar"; // imprting navbar for all pages

export const metadata = {
  title : "Marharshi Task",
  description:"Performing crud operations on Employee and department data",
};

export default function RootLayout({ children }) {  // wraps every page automatically
  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-900">
        <Navbar/>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

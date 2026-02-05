import "@/styles/globals.scss";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata = {
  title: `${site.name} – ${site.brand}`,
  description: "Projects, CV and links",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

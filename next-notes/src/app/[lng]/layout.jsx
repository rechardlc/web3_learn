import "@/styles/index.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { locales } from "@/config"
import SidebarImport from "@/components/SidebaImport";
export async function generateStaticParams() {
  return locales.map(locale => ({ lng: locale }))
}
export default async function RootLayout({ children, params }) {
  const { lng } = await params
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">
            <SidebarImport />
              {children}
            </section>
          </div>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}
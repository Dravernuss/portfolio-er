import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <NavBar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

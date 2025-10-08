import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar, FeedbackWidget, Topbar } from "../components";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Copyright from "../components/Copyright/Copyright";

const RootLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      {/* <Header /> */}
      <div className="flex-grow min-h-[calc(100vh-128px)] mt-23">
        <Outlet />
      </div>
      <Footer />
      <Copyright />
      <FeedbackWidget />
      <ScrollToTopButton />
    </main>
  );
};

export default RootLayout;

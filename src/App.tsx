import { Switch, Route } from "wouter";
import { ToastProvider } from "./components/ui/toast";
import { TooltipProvider } from "./components/ui/tooltip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

// Pages
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import ContactPage from "./pages/ContactPage";
import TourPackagesPage from "./pages/TourPackagesPage";
import FleetPage from "./pages/FleetPage";
import NotFound from "./pages/not-found";
import ScrollToTop from "./components/ScrollOnTop";

function App() {
  return (
    <TooltipProvider>
      <ToastProvider>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/booking" component={BookingForm} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/tour-packages" component={TourPackagesPage} />
              {/* <Route path="/fleet" component={FleetPage} />
              <Route path="/fleet/:vehicleType" component={FleetPage} /> */}
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </ToastProvider>
    </TooltipProvider>
  );
}

export default App;

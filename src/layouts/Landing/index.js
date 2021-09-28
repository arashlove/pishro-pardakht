import { Route, Switch } from "react-router";
import { Home } from "../../pages/landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.scss";
export default function Landing() {
  return (
    <div className="Landing">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

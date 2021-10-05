import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import Sidebar from "./components/Sidebar";
import { BuyCryptoCurrency } from "../../pages/dashboard";
import "./index.scss";
export default function Dashboard() {
  return (
    <Container className="Dashboard d-flex py-3 gap-5">
      <div className="sidebar-section position-relative w-0 w-lg-auto overflow-visible">
        <Sidebar />
      </div>
      <main>
        <Switch>
          <Route
            path="/dashboard/buy-crypto-currency"
            component={BuyCryptoCurrency}
            exact
          />
        </Switch>
      </main>
    </Container>
  );
}

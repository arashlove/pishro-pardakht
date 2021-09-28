import Comments from "./Components/Comments";
import MainSection from "./Components/MainSection";
import MiddleSection from "./Components/MiddleSection";
import Service from "./Components/Service";
import "./index.scss";
export default function Home() {
  return (
    <div className="Home">
      <MainSection />
      <Service />
      <MiddleSection />
      <Comments />
    </div>
  );
}

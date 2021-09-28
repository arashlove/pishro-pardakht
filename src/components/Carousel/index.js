import BCarousel from "react-bootstrap/Carousel";
import "./index.scss";
export default function Carousel() {
  return (
    <BCarousel>
      <BCarousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <BCarousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BCarousel.Caption>
      </BCarousel.Item>
    </BCarousel>
  );
}

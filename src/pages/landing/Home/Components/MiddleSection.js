import { Container } from "react-bootstrap";
import { Text } from "../../../../components";
import cardsImg from "../../../../assets/images/middle section/cards.svg";

export default function MiddleSection() {
  return (
    <div className="MiddleSection bg-lg-left-to-right py-5">
      <Container className='d-flex flex-column flex-center gap-5'>
        <h2 className='h2 text-light space-pre-wrap fw-bold text-center'>
          <Text value="landing.home.middle-section.title" />
        </h2>
        <img src={cardsImg} alt="cardsImg" />
      </Container>
    </div>
  );
}

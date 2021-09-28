import { Container } from "react-bootstrap";
import { Text, Carousel } from "../../../../components";

export default function Comments() {
  return (
    <Container className="Comments text-center">
      <h2 className="h2">
        <Text value="landing.home.comments-section.title" />
      </h2>
      <h6 className="h6 text-secondary">
        <Text value="landing.home.comments-section.description" />
      </h6>
      <Carousel />
    </Container>
  );
}

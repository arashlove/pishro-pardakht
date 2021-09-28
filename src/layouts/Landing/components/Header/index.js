import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.scss";
export default function Header() {
  return (
    <Container as="header" className="Header d-flex align-items-center">
      <Navbar />
      <Link to="/login" className="btn btn-violet me-auto px-4">
        ورود / ثبت نام
      </Link>
    </Container>
  );
}

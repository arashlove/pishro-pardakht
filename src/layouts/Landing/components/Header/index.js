import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import logo from "../../../../assets/logos/logo-text.svg";
import "./index.scss";
export default function Header() {
  return (
    <Container as="header" className="Header d-flex align-items-center">
      <Link to="/" className='d-none d-lg-block'>
        <img height='50' src={logo} alt="logo" />
      </Link>
      <Navbar />
      <Link to="/login" className="btn btn-violet px-4">
        ورود / ثبت نام
      </Link>
    </Container>
  );
}

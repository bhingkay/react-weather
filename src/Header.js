import React from "react";
import { Button } from "react-bootstrap";

import "./Header.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <Button variant="outline-warning">Manila</Button>
      <Button variant="outline-success" className="parisbtn">
        Paris
      </Button>
      <Button variant="outline-danger" className="Sydneybtn">
        Sydney
      </Button>
      <Button variant="outline-secondary">Jerusalem</Button>
    </div>
  );
}

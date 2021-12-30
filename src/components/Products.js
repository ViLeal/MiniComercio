import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "../assets/css/estilos.css";


const styles = {
    fontSize: "15px",
    color: "red",
    

};

export const Product = ({ item }) => {
    const { title, image, price } = item;
    return (
        <Col xs={6}>
            <Row>
                <Col xs={4}>
                    <div style={styles}>{title}</div>
                </Col>
                <Col xs={6}>
                <Button variant="outline-primary">
                        Precio <Badge bg="warning">{price}</Badge>
                        <span className="visually-hidden">$</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>

                    <img className="img-product" alt="" src={image}></img>

                </Col>
            </Row>
        </Col>
    );
};
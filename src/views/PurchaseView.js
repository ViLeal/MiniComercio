import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCart/DetailCart";

export const PurchaseView = ({history}) => {
    const cancelButton = () =>{
        history.push('/')
    } 
    return (
        <div>
            <DetailCart />
            <Row>
                <Col xs={6}>
                    <Button onClick={cancelButton} variant="danger">Cancelar</Button>
                </Col>
                <Col xs={6}>
                    <Button variant="danger">comprar</Button>
                </Col>
            </Row>
        </div>
    )
}
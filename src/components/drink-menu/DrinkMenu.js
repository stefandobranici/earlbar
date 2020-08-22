import React from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import DrinkItem from "./DrinkItem";

export default function DrinkMenu({ menu }) {
  return (
    <Tabs id="uncontrolled-tab-example">
      {menu.map((menu, i) => {
        return (
          <Tab eventKey={menu.type} title={menu.type}>
            <Row>
              {menu.submenu.map((item) => {
                return (
                  <Col md={6} lg={4}>
                    <DrinkItem item={item} />
                  </Col>
                );
              })}
            </Row>
          </Tab>
        );
      })}
    </Tabs>
  );
}

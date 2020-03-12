/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create google mapsimport { Document, Page, Text, View, StyleSheet } from "react-pdf";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import PDFViewer from "react-pdf";
import MyDocument from "./Doc";

class Map extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <PDFViewer>
                  <MyDocument />
                </PDFViewer>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;

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
import { Card, Row, Col, CardBody, Button } from "reactstrap";
import {
  PDFViewer,
  PDFDownloadLink,
  Page,
  Document
} from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

import ReactPDF from "@react-pdf/renderer";

class Map extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <PDFDownloadLink
                    document={<MyDocument name="Akash" />}
                    fileName="report.pdf"
                    tag="button"
                    className="btn btn-primary"
                  >
                    Download Report
                  </PDFDownloadLink>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <PDFViewer height="500px" className="col-md-12">
                <MyDocument />
              </PDFViewer>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;

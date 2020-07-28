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
import config from "../config";//1
import content from "../content.json";//2

class Map extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
    lang: config.language
  };
  lang;//3

  componentDidUpdate() {//4
    if (this.state.lang != config.language)
        this.setState({
            lang: config.language,
        });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  
    ReactPDF.render(<MyDocument />, `./example.pdf`);
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
                    document={<MyDocument 
                      path="http://localhost:5000/files/test.mp4"
                      hash="cf7bb66fc16f75e773255d2686a32c21"
                      duration="217.78"
                      size="10199203"
                      bit="24 "
                      ratio="0.62"
                     ans="null"
                      />}
                      fileName="report.pdf"
                      tag="button"
                      className="btn btn-primary"
                  >
                   
                   {content[this.state.lang].home.title1}
                  </PDFDownloadLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;

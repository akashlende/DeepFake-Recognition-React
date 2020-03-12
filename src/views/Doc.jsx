import React from "react";
import { Document, Page, Text, View, StyleSheet } from "react-pdf";

const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Section #1</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;

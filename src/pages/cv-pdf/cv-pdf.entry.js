import React, { Component } from 'react'
import Education from 'pages/education/Education'
import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer';
import { withRouter } from 'react-router-dom';
const qs = require('qs')

class CvPdf extends Component {

    componentDidMount() {
        let query = this.props.history.location.search
        let queries = qs.parse(query, { ignoreQueryPrefix: true })
        if (queries.pdf !== 'true') {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div>
                <PDFDownloadLink document={<CVDocument />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        )
    }
}


const CVDocument = () => {
    return (
        <Document>
                <Page size="A4" >
                    <View>
                        <Education />
                        <Text>Section #1</Text>
                    </View>
                    <View>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
    )
}

export default withRouter(CvPdf)
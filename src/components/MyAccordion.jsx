import React from 'react'
import { connect } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import '../assets/styles/Components/Accordion.scss'

const MyAccordion = () => {

  return (
    <div className='col-10 m-5 accordion-container'>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Installing the app on all devices</Accordion.Header>
          <Accordion.Body>
            Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We belive we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS bussines
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How to implement and manage API key</Accordion.Header>
          <Accordion.Body>
            Guide to setup and configuration. You can present below a guide and   a description of how your system configuration works and add some   animated screens. We belive we have created the most efficient SaaS   landing page for your users. Landing page with features that will   convince you to use it for your SaaS bussines
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How to set up and optimize your account</Accordion.Header>
          <Accordion.Body>
            Guide to setup and configuration. You can present below a guide and   a description of how your system configuration works and add some   animated screens. We belive we have created the most efficient SaaS   landing page for your users. Landing page with features that will   convince you to use it for your SaaS bussines
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Manage your account access and security settings</Accordion.Header>
          <Accordion.Body>
            Guide to setup and configuration. You can present below a guide and   a description of how your system configuration works and add some   animated screens. We belive we have created the most efficient SaaS   landing page for your users. Landing page with features that will   convince you to use it for your SaaS bussines
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>API integration basic overview</Accordion.Header>
          <Accordion.Body>
            Guide to setup and configuration. You can present below a guide and   a description of how your system configuration works and add some   animated screens. We belive we have created the most efficient SaaS   landing page for your users. Landing page with features that will   convince you to use it for your SaaS bussines
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Deactivating or deleting your account</Accordion.Header>
          <Accordion.Body>
            Guide to setup and configuration. You can present below a guide and   a description of how your system configuration works and add some   animated screens. We belive we have created the most efficient SaaS   landing page for your users. Landing page with features that will   convince you to use it for your SaaS bussines
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>

  ) 
} 
  
export default connect(null, null)(MyAccordion)


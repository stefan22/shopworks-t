import React, { Component } from 'react'
import QuestionsForm from './QuestionsForm'
import Layout from './Layout'
import { Section,Footer,H2 } from '../Styles/Styled'

class App extends Component {
  render() {
    return (
      <Layout>

        <Section>
          <H2>Questions Form</H2>
          <QuestionsForm />
        </Section>

        <Section>
          <Footer>
            ® ShopWorks {new Date().getFullYear()}
          </Footer>
        </Section>

      </Layout>
    )
  }
}

export default App

import React, {Component} from 'react'
import MockedAPI from './MockedApi'
import List from './ReusableList'
import TitleComp from './form-elements/TitleComp'
import SubtitleComp from './form-elements/SubtitleComp'
import TitleTextComp from './form-elements/TitleTextComp'
import SubtitleTextComp from './form-elements/SubtitleTextComp'
import SubtitleSelectComp from './form-elements/SubtitleSelectComp'
import SubmitButton from './SubmitButton'
import {Form} from '../Styles/Styled'


class QuestionsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      country: '',
      email: '',
      phone_number: '',
      street_address: '',
      post_code: '',
      questions: [],

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    MockedAPI.getQuestions()
      .then(res => res)
      .then(data => {
        this.setState({
          questions: data.questions,
        })
      })
  }

  handleChange(val,obj) {
    const {type,name} = obj
    if(type === 'text') {
      this.setState({
        [name]: val,
      })
    } else {
      this.setState({
        [name]: val,
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render () {

    const {questions} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>

        {
          !!questions &&

          <>
            <List
              item={TitleComp}
              items={questions}
            />
            <List
              item={TitleTextComp}
              items={questions}
              handleChange={this.handleChange}
            />
            <List
              item={SubtitleComp}
              items={questions}
            />
            <List
              item={SubtitleTextComp}
              items={questions}
              handleChange={this.handleChange}
            />
            <List
              item={SubtitleSelectComp}
              items={questions}
              handleChange={this.handleChange}
            />
          </>

        }

        <SubmitButton
          name={'Submit'}
        />


      </Form>
    )

  }


}

export default QuestionsForm

import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{

    constructor(props){
      super(props);
    }

    handleClick(button_text){
      if(this.props.quiz_question.answer===button_text){
        this.props.showNextQuestionHandler();
      }
    }

    render(){
      return(
        <main>
          <section>
              <p>{this.props.quiz_question.instruction_text}</p>
          </section>
          <section>
                <ul>
                  {this.props.quiz_question.answer_options.map((answer_option,index)=>
                  <QuizQuestionButton key= {index} button_text = {answer_option} clickHandler={this.handleClick.bind(this)}/>)}
                </ul>

          </section>
        </main>



      );

    }

}

export default QuizQuestion;

import React from 'react';

class QuizQuestion extends React.Component{

    constructor(props){
      super(props);
      this.id = props.quiz_question.id;
      this.instruction_text = props.quiz_question.instruction_text;
      this.answer_options = props.quiz_question.answer_options;
      this.answer = props.quiz_question.answer;
    }


    render(){
      return(
        <main>
          <section>
              <p></p>
          </section>
          <section>

                <ul>
                  <li>{this.answer_options[0]}</li>
                </ul>

          </section>
        </main>



      );

    }

}

export default QuizQuestion;

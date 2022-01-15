function phq9 (){
    return (




const App = React.createClass({
  getInitialState: function () {
    return {
      showWelcome: true,
      showForm: false,
      showResults: false,
      score: 0,
    };
  },

  // psuedo routing until I find something better...
  showPage: function (page, eScore) {
    this.setState({ showWelcome: page === "welcome" ? true : false });
    this.setState({ showForm: page === "form" ? true : false });
    if (eScore) {
      this.setState({ score: eScore });
      this.setState({ showResults: page === "results" ? true : false });
    }
  },

  updateScore: function (points) {
    this.setState({ score: points });
  },

  render: function () {
    var welcome = <Welcome changePage={this.showPage} />;
    var form = (
      <Form changePage={this.showPage} updateScore={this.updateScore} />
    );
    var results = (
      <Results changePage={this.showPage} score={this.state.score} />
    );
    return (
      <div>
        {this.state.showWelcome ? welcome : null}
        {this.state.showForm ? form : null}
        {this.state.showResults ? results : null}
      </div>
    );
  },
});

// Welcom message, default starting view
const welcome = React.createClass({
  // change to show questions form
  startForm: function () {
    this.props.changePage("form");
  },

  render: function () {
    return (
      <div>
        <p>{test.welcome}</p>
        <a className="btn btn-primary btn-block" onClick={this.startForm}>
          Begin PHQ-9
        </a>
      </div>
    );
  },
});

// Questionnaire Form
const Form = React.createClass({
  getInitialState: function () {
    return {
      valid: false,
      questionsCount: test.subQuestions.length,
      showError: false,
      validAnswers: {},
    };
  },

  // whenever a question is answered, push question numb to validAnswers array to maintain count
  updateValidCount: function (name, answer) {
    this.state.validAnswers[name] = answer;
  },

  // on submit, check that questions answered and number of questions match
  validateForm: function () {
    console.log(Object.keys(this.state.validAnswers).length);
    console.log(this.state.questionsCount);
    if (
      Object.keys(this.state.validAnswers).length === this.state.questionsCount
    ) {
      this.setState({ valid: true });
      return true;
    } else {
      this.setState({ showError: true });
      return false;
    }
    /* 
		Cannot return this.state.valid because react doesn't garauntee
		the immediate update of states -_- way around that?
		*/
    // return this.state.valid;
  },

  // validate form and switch to results page if valid
  getResults: function (event) {
    event.preventDefault();
    var isValid = this.validateForm();
    console.log(isValid);
    if (isValid) {
      const score = 0;
      for (var q in this.state.validAnswers) {
        score += this.state.validAnswers[q];
      }
      this.props.updateScore(score);
      this.forceUpdate();
      this.props.changePage("results", score);
    }
  },

  /*
	TODO - is there a more streamlined way of updating the questions count
	without passing the update count function with each child?
	*/
  render: function () {
    return (
      <form>
        <h4>{test.mainQuestion}</h4>
        <QuestionsList
          questions={test.subQuestions}
          countValid={this.updateValidCount}
        />
        {this.state.showError ? <FormError /> : ""}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.getResults}
        >
          Submit
        </button>
      </form>
    );
  },
});

/* NOTE - iterated child nodes should have 'key' props to make DOM updating minimal */
const QuestionsList = React.createClass({
  render: function () {
    const questions = this.props.questions.map(function (q, index) {
      return (
        <Question
          key={index}
          question={q}
          num={index}
          updateAnswered={this.props.countValid}
        />
      );
    }, this);

    return <div>{questions}</div>;
  },
});

const Question = React.createClass({
  // init state data with passed in question
  getInitialState: function () {
    return { question: this.props.question };
  },

  render: function () {
    return (
      <div className="well">
        <p className="lead">{this.state.question}</p>
        <OptionsList
          data={test.options}
          qnum={this.props.num}
          onAnswered={this.props.updateAnswered}
        />
      </div>
    );
  },
});

const OptionsList = React.createClass({
  // initialize state data with passed in options
  getInitialState: function () {
    return { value: "hello!" };
  },

  // when an item is checked or changed, update the value state
  onAnswerChange: function (event) {
    const target = event.target;
    this.setState({ value: target.value });
    this.props.onAnswered(target.name, target.value);
    // TODO - find out the difference between event.target and event.currentTarget
  },

  // create radio list items for answer options
  render: function () {
    // map each answer to a radio option
    const items = this.props.data.map(function (answerText, index) {
      // sets radio 'checked' attribute based on comparison to current state.value
      return (
        <div className="radio" key={index}>
          <label>
            <input
              type="radio"
              name={"Q" + this.props.qnum}
              value={index}
              onChange={this.onAnswerChange}
            />
            {answerText}
          </label>
        </div>
      );
    }, this); // pass 'this' to map() to maintain context

    // return items
    return <div>{items}</div>;
  },
});

// calculate results and display outcome based on severity
const Results = React.createClass({
  actionRequired: function () {
    return true;
  },

  render: function () {
    // var results = { severity : 'Moderate', recommend : true };
    var results = test.calculateSeverity(this.props.score);
    var severityClass = results.recommend ? "text-warning" : "text-primary";

    return (
      <div>
        <p className="lead">Thank you for completing the PHQ-9 Exam.</p>
        <div className="well">
          <p>Your depression severity level:</p>
          <h3 className={severityClass}>{results.severity}</h3>
          {results.recommend ? (
            <Recommendation />
          ) : (
            <p>No further action is required</p>
          )}
        </div>
      </div>
    );
  },
});

// component to display recommended professionals
const Recommendation = React.createClass({
  getInitialState: function () {
    return {
      success: false,
    };
  },

  updateSuccess: function () {
    this.setState({ success: true });
  },

  render: function () {
    var disabled = "btn btn-primary btn-block disabled";
    var normal = "btn btn-primary btn-block";
    return (
      <div>
        <p>
          It is recommended that you reach out to a health care professional.
          Please choose from the below list of qualified therapists and you will
          be contacted shortly.
        </p>
        {this.state.success ? <RequestSuccess /> : ""}
        {this.state.success ? "" : <TherapistList />}
        {this.state.success ? (
          ""
        ) : (
          <a className="btn btn-primary" onClick={this.updateSuccess}>
            Submit Request
          </a>
        )}
      </div>
    );
  },
});

const TherapistList = React.createClass({
  getInitialState: function () {
    return { activeItem: "" };
  },

  updateActiveItem: function (event) {
    this.setState({ activeItem: event.target.item });
  },

  render: function () {
    var active = "list-group-item active";
    var inactive = "list-group-item";

    var therapists = test.professionals.map(function (pro, index) {
      return (
        <a
          href="#"
          key={index}
          item={index}
          onClick={this.updateActiveItem}
          className={this.state.activeItem === index ? active : inactive}
        >
          {pro}
        </a>
      );
    }, this);

    return <div className="list-group">{therapists}</div>;
  },
});

// Success on submit of contact request
const RequestSuccess = React.createClass({
  render: function () {
    return (
      <div className="alert alert-success">
        <strong>Well done!</strong> You successfully submitted a request. You
        will be contacted shortly.
      </div>
    );
  },
});

// Error message on form submit
const FormError = React.createClass({
  render: function () {
    return (
      <div className="alert alert-danger">
        <strong>Oops!</strong> Please make sure all questions are answered.
      </div>
    );
  },
});

)
}


export default phq9;
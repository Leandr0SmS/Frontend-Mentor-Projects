const faqData = [
  {
    question: "How many team members can I invite?",
    answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "How do I reset my password?",
    answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes! Send us a message and we'll process your request no questions asked."
  },
  {
    question: "Do you provide additional support?",
    answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
]


function Questions(props) {
  return (
    <div className="questions--div">
      <h3 className="questions">{props.question}</h3>
      <p className="answer">{props.answer}</p>
    </div>
  )
}

//App
function App() {

  const questionsAnswers = faqData.map(elem => {
    return (
      <Questions 
        question={elem.question}
        answer={elem.answer}
      />
    )
  })

  return (
    <div className="faq--card">
      <div className="image--div">
        <img src=".\images\illustration-box-desktop.svg" alt="Cardboard box with an '@' on top"/>
      </div>
      <div className="faq--div">
        <h1>FAQ</h1>
        {questionsAnswers}
      </div>
    </div>
  )
}

//Render
const app = document.getElementById('root');
const root = ReactDOM.createRoot(app);
root.render(<App />)
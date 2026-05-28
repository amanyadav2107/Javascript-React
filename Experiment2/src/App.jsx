import './App.css'
import Student from './Components/Student'
function App() {
  return (
    <>
      <div className="container">
        <h1>Student Information</h1>
        <Student name='Aman Yadav' course='Computer Science' marks='85'/>
        <Student name='Divyanshi Srivastava' course = 'Information Technology' marks='92'/>
        <Student name='Kanishka Shishodia' course='Electronics' marks='78'/>
      </div>
    </>
  )
}

export default App


import './App.css'
import ConctactList from './components/ConctactList'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div>
      <h2>연락처 앱</h2>
      <ContactForm></ContactForm>
      <ConctactList></ConctactList>
    </div>
  )
}

export default App
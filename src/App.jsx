import './App.css'
import Logo from "./components/logo"
import Navigation from './components/navigation'
import TitleSpeech from './components/titleSpeech'
import Illustration from './components/illustration'

function App() {
    return (
        <>
        <div className='navigationContainer'>
            <Logo />
            <Navigation />
        </div>
        
        <div className='principalContainer'>
            <TitleSpeech />
            <Illustration />
        </div>
        </>
    )
}

export default App
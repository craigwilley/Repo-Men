import logo from './logo.svg';
import './App.css';

function Heading() {
    return <h1>This is an h1 heading</h1>
};

function App() {
    return (
        <div className="App">
            This is a webpage coded in React.JS
            <Heading />
        </div>
    );
}

export default App;

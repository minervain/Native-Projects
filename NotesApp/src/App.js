import './App.css';
import Header from './Components/Partials/Header';
import Input from './Components/Input/Input';
import TextArea from './Components/TextArea/TextArea';
import Color from './Components/ColorSelect/Color';
import Card from './Components/Card/Card';


function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <TextArea/>
      <Color/>
      <Card/>
    </div>
  );
}

export default App;

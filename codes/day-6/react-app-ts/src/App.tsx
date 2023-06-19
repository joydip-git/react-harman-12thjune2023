import './App.css';
import NameList from './NameList';
import Welcome from './Welcome';

function App() {
  const message = 'Welcome to React JS'
  const callMe = () => {
    window.alert('i have been called')
  }
  const invoke = (x: number) => console.log(x)
  //const welcomeDesign = Welcome({messageValue:'Welcome to React JS', data:undefined, callFn:()=>{....}})
  return (
    <div className="App">
      {/* {welcomeDesign} */}
      <Welcome messageValue={message} callFn={callMe} anotherFn={invoke}>
        <p>Hi...</p>
        <div>Hello...</div>
      </Welcome>
      <br />
      <br />
      <NameList />
    </div>
  );
}

export default App;

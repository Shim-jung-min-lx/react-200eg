import logo from './logo.svg';
import './App.css';
// import ImportComponent from './R003_ImportComponent';
// import LifecycleEx4 from './R004_LifecycleEx';
// import LifecycleEx5 from './R005_LifecycleEx';
// import LifecycleEx6 from './R006_LifecycleEx';
// import LifecycleEx7 from './R007_LifecycleEx';
import LifecycleEx8 from './R008_LifecycleEx';

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      {/* <ImportComponent></ImportComponent>
      <LifecycleEx4></LifecycleEx4>
      <LifecycleEx5></LifecycleEx5>
      <LifecycleEx6 prop_value = 'FromApp.js'/>
      <LifecycleEx7 prop_value = 'From App.js'/> */}
      <LifecycleEx8 prop_value = 'From App.js2'/>
    </div>
  );
}

export default App;

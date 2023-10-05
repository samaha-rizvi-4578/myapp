//import logo from './logo.svg';
//import './App.css';
import FucntionalComp from './components/FunctionalComp';
import {ClassComp, ClassComp1} from './components/ClassComp';
import Click from './components/Click';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';


function App() {
  return (<div><h1>REACT BASICS</h1>

    <h2>This is my first basic react app </h2>
    <p><i>It has no formating , just basic implementation of functions and components in order to understand how they work</i></p>
    <FucntionalComp />
    <ClassComp />
    <ClassComp1 />
    <Click />
    <Counter />
    <ParentComp />
    <p><b>Signing Of:</b> <i>Syeda Samaha Batool Rizvi</i></p>
    </div>
    );
}

export default App;

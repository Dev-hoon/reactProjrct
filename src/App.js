// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import react from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
function App() {
  const name = 'react';
  const style = {
    backgroundColor :  'black',
    color : 'aqua',
    fontsize : 24,
    padding : '1rem'
  }
  return (
    // <div>
    //   {/* 안녕하세용 */}
    //   {//안녕하세용
    //   }
    //   <Hello name= '일번이'/>
    //   <Hello name= '이번이' color = 'pink'/>
    //   <Hello name= '삼번이'/>
    //   <Hello name= 'react' color = 'red'/>
    //   <div style = {style}>{name}</div>
    //   <div className = 'gray-box'>{name}</div>
    //   <Hello />
    //   <Hello />
    //   <Hello />
    //   <Hello />
    // </div>
    // <Wrapper>
    //   <Hello name = '일번이' color = 'red' isSpecial = {true}/>
    //   <Hello  color = 'blue' isSpecial/>

    // </Wrapper>
    // <div>
    // <Counter />
    // <Counter />
    // <Counter />
    // <Counter />
    // </div>
    <InputSample />
  );
}

export default App;

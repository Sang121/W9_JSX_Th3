import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const DemoComponent = (props) => {
  return(
    <div>
      <div>Đây là tuổi {props.age} </div>
      <div>Đây là tên {props.displayName} </div>
    </div>
  )
  console.log('a')
}
function App() {
  const [age, setAge] = useState(18);
  const [name, setName] = useState('Sang');
  const onIncreaseAge =() =>{
    setAge(age+1); 
  };
  const editName=()=>{
    setName('Nguyễn Hàm Sáng')
  }
  return (
    <div style={{padding:20}}>
      <DemoComponent age={age} displayName={name} /> 
      <button onClick={onIncreaseAge}>Tăng tuổi lên 1</button>
      <button onClick={editName}>Thêm họ tên đầy đủ</button>
      
    </div>
   
  );
}

export default App;

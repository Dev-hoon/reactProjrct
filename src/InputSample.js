import React,{useState} from 'react';

function InputSample() {
    const [input,setInput] = useState({
        name : '',
        nickname :''
    });
    const {name, nickname} = input;
    const onChange = (e) =>{
        const {value, name} = e.target;
        setInput({
            ...input,
            [name]:value
        })
      //setText(e.target.value);  
    };
    const onReset = () =>{
        setInput({
            name: '',
            nickname:'',
        })
        //setText('');  
      };
  return (
    <div>
      {/* <input onChange = {onChange} value={text}/>
      <button onClick = {onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div> */}
      <input name = 'name' placeholder = '이름' onChange={onChange} value={name}/>
      <input name = 'nickname'placeholder = '닉네임' onChange={onChange} value={nickname}/>
      <button onClick = {onReset}>초기화</button>
      <div>
        <b>값:</b><br />
        이름(닉네임)<br />
        {name}({nickname})
      </div>
    </div>
  );
}

export default InputSample;
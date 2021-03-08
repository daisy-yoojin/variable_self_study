import React, { useState } from 'react';
import axios from 'axios';

const App = ()=>{
  const [data, setData] = useState(null);
  // const onClick = ()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response =>{
  //     setData(response.data);
  //   })
  // }
  const onClick = async ()=>{
    try{
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=896726465f1c4a539a93d679e4f751e7',
        );
      setData(response);
    }catch(e){
      console.log(e);
    }    
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
    </div>
  );
}

export default App;

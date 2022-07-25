import './App.css';
import React,{useState} from 'react'
import Card from './Card';

function App() {
  const [data,setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false)
  const sleep =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const getData = async () => {
    setData(null);
    setIsFetching(true);
    const response = await fetch('https://reqres.in/api/users?page=1')
    const res = await response.json();
    await sleep(1500);
    setData(res.data);
    setIsFetching(false)
  }

  return (
    <div className="App">
      <div className="navbar">
        <span>Green Tree</span>
        <input type="button" value="Get Users" onClick={getData}/>
      </div>
      <div className="cards">
        {
          isFetching && 
          <div class="container">
            <div class="dash uno"></div>
            <div class="dash dos"></div>
            <div class="dash tres"></div>
            <div class="dash cuatro"></div>
          </div>
        }
        {
          data!==null && 
          data.map((data)=>{
            return <Card key={data.id} id={data.id} firstName={data.first_name} lastName={data.last_name} 
                          email={data.email} image={data.avatar}/>
          })
        }
      </div>
      
    </div>
  );
}

export default App;

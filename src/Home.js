import {useState} from 'react';
function Home() {
  const [name,setName]=useState("");
  const [people, setPeople]=useState([]);
  const [number,setNumber]=useState("");
  const [loadClick, setLoadClick]=useState(false);
  const [parsedPeople,setParsedPeople]=useState([]);
  const [id, setId]=useState(0);
  const submitForm=(e)=>{
    e.preventDefault();
    const obj={
      id:id,
      name:name,
      number:number
    };
    setId(id+1);
    setPeople(prev=>{
     const newarray= [...prev, obj ];
     return newarray;
    });
    localStorage.setItem('obj',JSON.stringify(people));
    setName("");
    setNumber("");
  }

  const writeName=(e)=>{
    setName(e.target.value);
  }
  const writeNum=(e)=>{
     setNumber(e.target.value);
  }
  const loadPeople=()=>{
    setLoadClick(true);
    const loadedPeople=localStorage.getItem('obj');
    setParsedPeople(JSON.parse(loadedPeople));
  }
  const deleteData=(id)=>{
    const restPerson= people.filter(person=>person.id!==id)
    setId(id-1);
    setPeople(restPerson);
    localStorage.setItem('obj',JSON.stringify(people));
    loadPeople();
  }
 return(
   <div>
     <form onSubmit={submitForm}>
     <input onChange={writeName} type="text" placeholder="이름을 입력하세요" value={name}/>
     <input onChange={writeNum} type="number" placeholder="학번을 입력" value={number}/>       
     <button type="submit">저장하기</button>
     </form>
     <button onClick={loadPeople}>데이터 보기</button>
     <div>
      {
      parsedPeople.map((people)=>
      <div key={people.id}>
      name:{people.name}
      <button onClick={()=>deleteData(people.id)}>삭제</button>
      </div>
      )
      }
     </div>
     
   </div>
 );
}
export default Home;

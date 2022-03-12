import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';

function New() {
  const [title,setTitle]=useState("");
  const [people, setPeople]=useState([]);
  const [text,setText]=useState("");
  const [id, setId]=useState(0);
  const [written,setWritten]=useState(false);
  const [newTitle, setNewTitle]=useState("");
  const {Id}=useParams();
  const {Title}=useParams();
  const {Text}=useParams();
  const submitForm=(e)=>{
    e.preventDefault();
  const obj={
      id:id,
      title:title,
      text:text
    };
  setId(id+1);
  setPeople(prev=>{
     const newarray= [...prev, obj ];
     return newarray;
    });
  console.log(people.index);
   localStorage.setItem('obj',JSON.stringify(people));
   setTitle("");
   setText("");
  }
  const reSubmitForm=(e)=>{
    e.preventDefault();
  }

  const writeTitle=(e)=>{
    setTitle(e.target.value);
  }
  const writeText=(e)=>{
     setText(e.target.value);
  }
  useEffect(()=>{
   if(Id){
     setWritten(true);
   }
  },[])
  const deleteData=(id)=>{
    const filterPeople=people.filter(people=>people.id!==id)
    setPeople(filterPeople);
    localStorage.setItem('obj',JSON.stringify(people));
  }
 return(
   <div>
    <h3>Write your notes...</h3>
    {written ? 
      <form onSubmit={reSubmitForm}>
      <input onChange={writeTitle} type="text" value={Title}/>
      <input onChange={writeText} type="text"  value={Text}/>       
      <button type="submit">저장하기</button>
      </form>
     : 
     <form onSubmit={submitForm}>
     <input onChange={writeTitle} type="text" placeholder="제목을 입력하세요" value={title }/>
     <input onChange={writeText} type="text" placeholder="내용을 입력" value={text}/>       
     <button type="submit">저장하기</button>
     </form>
    }
     <button><Link to='/find' style={{textDecoration:'none'}}>목록보기</Link></button>
    <button onClick={()=>deleteData(Id)}><Link to="/find">삭제</Link></button>
   
   </div>
 );
}
export default New;
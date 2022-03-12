import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
function Find(){
 const [parsedPeople,setParsedPeople]=useState([]);
 useEffect(()=>{
  const loadedPeople=localStorage.getItem('obj');
  setParsedPeople(JSON.parse(loadedPeople));
  },[]);
  return(
  <div>  
  <h1>Notes App</h1>
  Take notes and never forget!
  <ul>
  {parsedPeople.map(people=>(
  <div>
   <li key={people.title}><Link to={`/${people.id}/${people.title}/${people.text}`}>{people.title}</Link></li>    
  </div>
  ))}
  </ul>
  <button><Link to="/">추가하기</Link></button>
  </div>
  );
}
export default Find;
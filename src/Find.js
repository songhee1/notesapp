import {Link} from 'react-router-dom';
function Find(){
  return(
  <div>  
  <h1>Notes App</h1>
  Take notes and never forget!
  <form>
      <input type="text"/>
      </form>
     
    <button> 
       <Link to="/" style={{textDecoration:'none'}}>Create Note</Link>
    </button>
  </div>
  );
}
export default Find;
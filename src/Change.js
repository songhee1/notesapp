import { useParams,Link } from "react-router-dom";

function Change(){
    const {id}=useParams();
    const {title}=useParams();
    const {text}=useParams();
    const changeForm=(e)=>{
    e.preventDefault();
    const obj={
        id:id,
        title:title,
        text:text
      };
  
    }
    return(
    <div>
    <form onSubmit={changeForm}>
      <div>    
      제목 : <input value={title}/>
      </div>
      <div>
      내용 : <input value={text}/>
     </div>
    <button type="submit"><Link to="/">수정하기</Link></button>
    </form>
    
    </div>
    );
}
export default Change;
import {Routes, Route} from 'react-router-dom';
import New from './New';
import Find from './Find';
function App(){
  return(
    <Routes>
      <Route path="/find" element={<Find/>}/>
      <Route path="/:Id/:Title/:Text" element={<New/>}/>
      <Route path="/" element={<New/>}/>
    </Routes>
  );
}
export default App;
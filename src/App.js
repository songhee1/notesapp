import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Find from './Find';
function App(){
  return(
    <Routes>
      <Route path="/find" element={<Find/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}
export default App;
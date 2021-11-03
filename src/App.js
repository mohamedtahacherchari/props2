
import './App.css';
import Comments from './componment/Comments';
import Header from './componment/Header';
import Sidebar from './componment/Sidebar';
import ReactPlayer from 'react-player'
import Comment from "./componment/Comment"
import {commentList} from "./componment/Data"


function App() {
  const com=commentList[2]
  return (
    <div className="App" >
        <Header/>
      <div className="flexBox">
        <div>
        <ReactPlayer url="https://www.youtube.com/embed/dGcsHMXbSOA" />
        <Comment el={com} />
        </div>
        <Sidebar/>
      </div>
      <Comments/>    
    </div>
  );
}

export default App;

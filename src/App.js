import { useState,useEffect } from "react";
import Posts from './Posts'
import Pagination from './Pagination'
import './App.css';
function App() {
  const [posts, setPosts] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [userCurrent, setUserCurrent] = useState(10);
  const [sort, setSort] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=3&results=100')
      .then((response) => response.json(''))
      .then( (posts) => setPosts(posts.results))
  },[])

  const handleGetValue = (e) => {
    setUserCurrent(e.target.value)
  }

  const handleChangeCurrentUser = () => {
    setPostsPerPage(userCurrent)
  }
  
  const handleSortUserName = () => {
    setSort(true)
    setToggleSort(!toggleSort);
    if(toggleSort){
      posts.sort( (a,b) => {
        if(a.login.username < b.login.username){
          return -1
        }
        if(a.login.username > b.login.username){
          return 1;
        }
        return 0
      })
    }else{
      posts.sort( (a,b) => {
        if(a.login.username > b.login.username){
          return -1
        }
        if(a.login.username < b.login.username){
          return 1;
        }
        return 0
      })
    }
  }
  
  
  const indexOfLastPosts = numPage * postsPerPage
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPosts,indexOfLastPosts)
  const handleChoosePage = (pageNumber) => {
    setNumPage(pageNumber)
  }
 
  return (
    <div className="App">
        <Posts posts={currentPosts} onSortUserName={handleSortUserName} onSortLoad={sort} toggleSort={toggleSort} onGetValue={handleGetValue}onChangeCurrentUser={handleChangeCurrentUser}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} handleChoosePage={handleChoosePage} numPage={numPage}/>
    </div>
  );
}

export default App;

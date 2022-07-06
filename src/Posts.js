import React from 'react';
const Posts = ({posts,onSortUserName,onSortLoad,toggleSort,onChangeCurrentUser,onGetValue}) =>{
    return (
        <>
            <div className="col-md-3 float-md-start d-flex mb-2">
                <input type="number" className="form-control me-3" placeholder="User in page" onChange={onGetValue}/>
                <button className="btn btn-primary" onClick={onChangeCurrentUser}>Update</button>
            </div>
            <a className="btn btn-outline-primary col-md-2 float-md-end " style={{marginLeft: 'auto'}}onClick={() => onSortUserName()}>{onSortLoad?(toggleSort ? 'ASC' : 'DESC' ):'Sort'}</a>
            <table className="table table-striped table-hover mb-5" style={{fontWeight: 900}}>    
                <thead style={{backgroundColor: '#D2D7D3'}}>
                    <tr className="table-active">
                        <th scope="col">Thumbnail</th>
                        <th scope="col">FullName</th>
                        <th scope="col">
                            UserName 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map( (post,index) => (
                    <tr key={index}>
                        <img src={post.picture.thumbnail} style={{borderRadius: 40}}/>
                        <td ><b>{post.name.title} {post.name.first} {post.name.last}</b></td>
                        <td><b>{post.login.username}</b> </td>
                        
                    </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}
export default Posts;
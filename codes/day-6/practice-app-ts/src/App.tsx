import './App.css';
//import Parent from './Parent';
import PostList from './PostList';
import { Post } from './post';

function App() {
  //code

  //all post objects in an array
  const posts: Post[] = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    "userId": 2,
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  }]

  //function to delete a Post object from the array: when this function is called, one has to pass an id of a post object. the function returns nothing (void).
  const deletePostHandler = (id: number): void => {
    //1: find index position of the object having the same 'id' value, in the array (use findIndex() of array for that)
    const indexPosition = posts.findIndex(
      (p: Post) => { return p.id === id }
    )
    //2: use the splice() method of array to delete a record
    posts.splice(indexPosition, 1)
    console.log(posts)
  }

  //design
  return (
    <div className="App">
      <PostList records={posts} deleteFn={deletePostHandler} />
      <br />
      {/* <Parent /> */}
    </div>
  );
}

export default App;
/**
 * property object => {records:[{},{},....]}
 */

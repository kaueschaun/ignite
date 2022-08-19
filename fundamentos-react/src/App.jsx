import { Header } from "./components/Header";
import Post from "./Post";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ex tempore? Perspiciatis animi explicabo sint facilis ea dolores expedita omnis quibusdam corrupti eveniet. Ut dignissimos accusantium at dolorum deleniti quo?"
      />
      <Post author="Kaue" content="Lorem ipsum dolor sit," />
    </div>
  );
}

export default App;

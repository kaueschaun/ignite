import { Header } from "./components/Header";
import Post from "./Post";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ex tempore? Perspiciatis animi explicabo sint facilis ea dolores expedita omnis quibusdam corrupti eveniet. Ut dignissimos accusantium at dolorum deleniti quo?"
          />
          <Post author="Kaue" content="Lorem ipsum dolor sit," />
        </main>
      </div>
    </div>
  );
}

export default App;

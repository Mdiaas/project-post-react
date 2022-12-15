import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mateus Dias"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque maxime quod ullam. Vitae ex deleniti officia "
          />
        </main>
      </div>
    </div>
  )
}






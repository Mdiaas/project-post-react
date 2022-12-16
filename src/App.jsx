import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content:[
      {type: 'paragraph',  content: 'Eai galera'},
      {type: 'paragraph', content: 'Estou desenvolvendo um curso de react native'},
      {type: 'link', content: 'Veja mais em rocketseat.com'}
    ],
    publishedAt: new Date('2022-12-01 09:45:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/mdiaas.png',
      name: 'Mateus Dias',
      role: 'Web Developer'
    },
    content:[
      {type: 'paragraph',  content: 'Eai galera'},
      {type: 'paragraph', content: 'Estou começando com react e react native'},
      {type: 'link', content: 'Veja mais em mateus.dias.project'}
    ],
    publishedAt: new Date('2022-12-05 07:00:00')
  },{
    id: 3,
    author:{
      avatarUrl: 'https://github.com/atlopes.png',
      name: 'Alexandre trindade',
      role: 'Web Developer'
    },
    content:[
      {type: 'paragraph',  content: 'Salve!'},
      {type: 'paragraph', content: 'Desenvolvi um novo projeto'},
      {type: 'link', content: 'Veja mais em atlopes.project'}
    ],
    publishedAt: new Date('2022-12-16 07:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key= {post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}






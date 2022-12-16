import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/mdiaas.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Mateus Dias</strong>
                        <span>Web Developer</span>
                    </div>
                </div>    
                <time title = "15 de dezembro de 2022 as 11:45" dateTime="2022-12-15 11:45:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Eai galera</p>
                <p>Estou começando com react e react native</p>
                <p>Espero que gostem desse projeto, estou me dedicando bastante</p>
                <p><a href="#">Veja mais em mateus.dias.project</a></p>
                <p>
                    <a href="#">#nlw</a> { ' ' }
                    <a href="#">#newProject</a> { ' ' }
                    <a href="#">#greatJob</a> { ' ' }
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type="submit">Comentário</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
import { Pen, PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/Mdiaas.png" />
                <strong>Mateus Dias</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
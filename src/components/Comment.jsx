import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment(){
        onDeleteComment(content);
    }
    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }
   
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/mdiaas.png" alt="" />

            <div className={styles.commentBox}>
                <div className = {styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Dias</strong>
                            <time title = "15 de dezembro de 2022 as 11:45" dateTime="2022-12-15 11:45:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    {content}
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp /> 
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
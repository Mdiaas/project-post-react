import styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src}){
    return(
        <img
            src={src}
            className={hasBorder ? styles.borderedAvatar : styles.avatar}
        />
    );
}
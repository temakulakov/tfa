import styles from "./card.module.scss";

const Card = (props) => {
    return <div className={styles.root} style={props.background ?{ backgroundImage: `url(${props.background})`} : {}}>
       <div className={styles.shadow} ></div>
        <p>{props.children}</p>
    </div>
}

export default Card;
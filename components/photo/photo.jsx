import styles from "./photo.module.scss";
import Image from "next/image";

const Photo = (props) => {
    return <div className={styles.root}>
        <Image style={{height: "100%", width: "100%"}} layout="fill" src={props.img} alt={props.img} width={props.width} height={props.height}/>
    </div>
}

export default Photo;
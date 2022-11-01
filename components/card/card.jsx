import styles from "./card.module.scss";
import Image from "next/image";
import {useState} from "react";

const Card = (props) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    return <div className={styles.root} >
      <Image style={{width: "100%", height: "100%"}} src={`${props.background}`} alt={"props.children"}  width={300} height={300}/>
       <div className={styles.shadow}></div>
        <p>{props.children}</p>
    </div>
}

export default Card;
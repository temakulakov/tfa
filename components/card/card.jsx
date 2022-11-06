import styles from "./card.module.scss";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  if (props.link) {
    return (
      <Link href={props.link ? props.link : ""}>
        <div
          onClick={() => (props.onClick ? props.onClick() : "undefined")}
          className={styles.root}>
          <Image
            style={{ width: "100%", height: "100%" }}
            src={`${props.background}`}
            alt={"props.children"}
            width={300}
            height={300}
            layout={"fill"}
            objectFit={"cover"}
          />
          <div
            className={styles.shadow}
            style={{ transform: "translateY(20px)" }}></div>
          <p>{props.children}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        onClick={() => (props.onClick ? props.onClick() : "undefined")}
        className={styles.root}>
        <Image
          style={{ width: "100%", height: "100%" }}
          src={`${props.background}`}
          alt={"props.children"}
          width={300}
          height={300}
        />
        <div className={styles.shadow}></div>
        <p>{props.children}</p>
      </div>
    );
  }
};

export default Card;

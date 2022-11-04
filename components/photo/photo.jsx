import styles from "./photo.module.scss";
import Image from "next/image";
import Link from "next/link";

const Photo = (props) => {
  return (
    <div className={styles.root}>
      <Link href='https://instagram.com'>
        <Image
          style={{ height: "100%", width: "100%" }}
          layout='fill'
          src={props.img}
          alt={props.img}
          width={props.width}
          height={props.height}
        />
      </Link>
    </div>
  );
};

export default Photo;

import styles from "./productBlock.module.scss";
import Card from "../card/card";

const ProductBlock = () => {
    return <>
        <h1 className={styles.head} >Примеры фактур</h1>
    <div className={styles.root}>
        <div id={"scroller"} className={styles.content}>
            <Card background={"/classic.webp"}>Классика</Card>
            <Card background={"/travertin.jpeg"}>Под травертин</Card>
            <Card background={"/3d.jpeg"}>3Д фактура</Card>
        </div>
    </div>
    </>
}

export default ProductBlock;
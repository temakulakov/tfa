import styles from "./socialBlock.module.scss";
import Photo from "../photo/photo";

const SocialBlock = () => {
    return <div className={styles.root}>
        <p>#tfalmaty</p>
        <h1>Мы в социальных сетях</h1>
        <div className={styles.grid}>
            <div className={styles.height}>
                <Photo img={"/starter-background.jpg"} width={200} height={100}/>
            </div>
            <div className={styles.two}>
                <Photo img={"/1.jpg"} width={200} height={100}/>
            </div>
            <div className={styles.three}>
                <Photo img={"/2.jpg"} width={200} height={100}/>
            </div>
            <div className={styles.four}>
                <Photo img={"/3.jpg"} width={200} height={100}/>
            </div>
            <div className={styles.five}>
                <Photo img={"/4.jpg"} width={200} height={100}/>
            </div>
            <div className={styles.width}>
                <Photo img={"/call-background.jpg"} width={200} height={100}/>
            </div>
        </div>
        <div className={styles.buttn}>
            <button
                className='button button--atlas'>

                <span>Instagram</span>
                <div className='marquee' aria-hidden='true'>
                    <div className='marquee__inner'>
                        <span>Instagram</span>
                        <span>Instagram</span>
                        <span>Instagram</span>
                        <span>Instagram</span>
                    </div>
                </div>
            </button>
        </div>
    </div>
}

export default SocialBlock;
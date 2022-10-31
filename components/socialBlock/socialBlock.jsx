import styles from "./socialBlock.module.scss";

const SocialBlock = () => {
    return <div className={styles.root}>
        <p>#tfalmaty</p>
        <h1>Мы в социальных сетях</h1>
        <div className={styles.grid}>
            <div className={styles.height}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
            <div className={styles.width}></div>
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
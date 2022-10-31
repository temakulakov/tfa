import styles from "./senderBlock.module.scss";

const SenderBlock = () => {
    return <div className={styles.root}>
        <div className={styles.text}>
            <p><span>Эксклюзивная рассылка</span></p>
            <p>Полезные советы и персональный предложения</p>
        </div>
        <div className={styles.search}>
            <input type="text" name="" required=""/>
            <label>Ваш email</label>
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_33_31)">
                    <path d="M9.9844 12.6279L27.5907 15.0332L9.84697 16.0487L4.50706 26.6656C4.16014 27.3553 4.84811 28.1088 5.56642 27.8258L35.3192 16.1073C35.9998 15.8392 36.0372 14.8899 35.3797 14.5691L6.64118 0.548935C5.9473 0.210421 5.20227 0.907506 5.49388 1.62239L9.9844 12.6279Z" fill="#DADADA"/>
                </g>
                <defs>
                    <filter id="filter0_d_33_31" x="0.414307" y="0.460938" width="39.4375" height="35.426" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_31"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_31" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
}

export default SenderBlock;
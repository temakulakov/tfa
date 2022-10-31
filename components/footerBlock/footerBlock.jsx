import styles from "./footerBlock.module.scss";
import Link from "next/link";

const FooterBlock = () => {
    return <div className={styles.root}>
        <div className={styles.links}>
            <h1>Полезные ссылки</h1>
            <ul>
                <li><Link href={"/"}>Доставка</Link></li>
                <li><Link href={"/"}>Оплата</Link></li>
                <li><Link href={"/"}>Акции</Link></li>
                <li><Link href={"/"}>Онлайн калькулятор</Link></li>
                <li><Link href={"/"}>Политика конфиденциальности</Link></li>
            </ul>
        </div>
        <div className={styles.pay}>
            <h1>Оплата</h1>
            <p>Данные, которые Вы вводите при покупке нигде не сохраняются.</p>
            <p>Оплата происходит  через сервисы банка или плаежной ситемы.</p>
            <div className={styles.svgs}>
                {/*<svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">*/}
                {/*    <rect width="45" height="30" fill="url(#pattern0)"/>*/}
                {/*    <defs>*/}
                {/*        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">*/}
                {/*            <use xlink:href="#image0_1_185" transform="translate(0 0.085) scale(0.00333333 0.005)"/>*/}
                {/*        </pattern>*/}
                {/*        <image id="image0_1_185" width="300" height="166" xlink:href="data:image/png;base64,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"/>*/}
                {/*    </defs>*/}
                {/*</svg>*/}
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.18 0.00276184C13.8106 0.0185204 13.3307 0.053978 12.9993 0.0914059C10.5523 0.367193 8.22335 1.27138 6.20099 2.73107C4.75372 3.77709 3.47022 5.11859 2.4838 6.61965C0.314804 9.91924 -0.475479 13.9516 0.278623 17.8776C0.874668 20.9901 2.46476 23.8661 4.78228 26.0251C5.19361 26.4093 6.05626 27.1165 6.11148 27.1165C6.1191 27.1165 6.14005 27.083 6.161 27.0436C6.32477 26.7067 6.59518 25.2864 6.68087 24.2995C6.71324 23.9193 6.71324 22.367 6.68087 21.9652C6.61612 21.191 6.55899 20.7163 6.46568 20.2139C6.40094 19.8633 6.37618 19.751 6.18575 18.9808C5.99532 18.2125 5.93438 17.789 5.93438 17.2276C5.93438 16.5913 6.01056 16.15 6.28668 15.2104C6.56661 14.251 6.63707 13.8098 6.68658 12.6869C6.75895 11.0421 6.85987 10.3979 7.136 9.83847C7.27311 9.56071 7.38546 9.41888 7.81012 8.96974C8.60421 8.13647 8.6899 7.90994 8.52042 7.12198C8.4233 6.67875 8.39664 6.39508 8.42521 6.13309C8.48233 5.5894 8.68038 5.17572 9.09361 4.73249C9.61349 4.17698 10.1905 3.81649 10.7618 3.69238C10.9465 3.65101 11.2531 3.65889 11.4092 3.71011C11.6454 3.78497 11.7692 3.89331 11.872 4.12379C11.9196 4.2282 11.9234 4.2538 11.9215 4.49216C11.9215 4.71279 11.9139 4.77189 11.8682 4.92554C11.7958 5.17178 11.5997 5.57167 11.4207 5.84154C10.8608 6.67875 10.6951 6.9762 10.619 7.28745C10.5733 7.47262 10.5694 7.70507 10.6094 7.84296C10.6761 8.07344 10.9122 8.35907 11.3331 8.71366C11.9005 9.19431 12.0853 9.40706 12.3309 9.87393C12.6394 10.457 12.8851 11.0913 13.3592 12.5274C13.5497 13.1006 13.6487 13.2897 13.8677 13.5064C14.2524 13.8827 14.7817 14.0678 15.6634 14.1368C16.608 14.2077 17.3697 14.0718 18.1504 13.6916C18.8055 13.3744 19.3045 12.9214 19.4378 12.5274C19.4835 12.3934 19.4854 12.1157 19.4435 11.8872C19.4282 11.7965 19.373 11.6055 19.3216 11.4656C19.1216 10.9121 19.1083 10.6737 19.2549 10.2187C19.4625 9.58041 19.9595 8.85549 20.4508 8.4753C20.8469 8.16996 21.1859 8.03601 21.6067 8.01434C22.0866 7.99267 22.4218 8.15814 22.5741 8.49697C22.6198 8.59743 22.6255 8.63289 22.6255 8.82594C22.6255 9.16279 22.5913 9.24553 22.0638 10.2246C21.6982 10.9022 21.5344 11.243 21.4563 11.4873C21.3478 11.8202 21.3859 12.0782 21.5591 12.1807C21.6277 12.2201 21.6544 12.224 21.8162 12.2181C22.039 12.2083 22.2256 12.1472 22.5494 11.9778C22.9588 11.7631 23.2597 11.5503 23.7853 11.1031C24.4099 10.5732 24.6193 10.3132 25.0916 9.48586C25.2535 9.20022 25.3144 9.11355 25.442 8.98156C25.821 8.58955 26.2723 8.55212 26.5789 8.88898C26.7693 9.09779 26.8512 9.40509 26.8074 9.74391C26.7617 10.1024 26.6455 10.394 26.3865 10.7939C26.1047 11.2272 25.8229 11.57 24.8155 12.6968C23.909 13.7133 23.5282 14.1821 23.2159 14.6647C22.8998 15.1552 22.7722 15.4724 22.755 15.8092C22.736 16.1697 22.7988 17.0227 22.8941 17.6609C23.1702 19.5205 23.8881 21.5653 24.8974 23.3638C25.2497 23.9902 25.5334 24.4118 25.7067 24.5674L25.7867 24.6364L25.84 24.5713C25.8705 24.5359 25.9733 24.4039 26.0704 24.2798C28.527 21.1201 29.6162 17.1744 29.1459 13.14C28.8297 10.4196 27.7595 7.81144 26.0742 5.64455C25.3373 4.69703 24.4213 3.78103 23.4768 3.04823C21.1821 1.26547 18.4856 0.23127 15.6082 0.0323105C15.2997 0.0106411 14.4275 -0.00708771 14.18 0.00276184Z" fill="#F04634"/>
                    <path d="M14.3512 16.0772C14.3245 16.0811 14.2445 16.0949 14.1703 16.1068C13.2353 16.2624 12.7649 17.1488 12.6087 19.0498C12.5402 19.8988 12.5269 21.2541 12.5611 24.1124C12.5878 26.3364 12.6411 27.2052 12.8087 28.0621C13.0163 29.1298 13.3095 29.5631 14.0084 29.833C14.1855 29.9 14.235 29.9118 14.4369 29.9217C14.7054 29.9374 15.5242 29.9059 15.9698 29.8626C16.6135 29.8015 17.3257 29.6833 17.937 29.5395C18.1998 29.4765 18.3083 29.4252 18.6016 29.2184C18.7939 29.0845 18.9767 28.8914 19.0453 28.7515C19.2662 28.3004 19.2243 26.9353 18.9101 24.339C18.8034 23.4584 18.3883 20.5292 18.1979 19.3157C18.0703 18.5041 17.8932 17.9663 17.6056 17.5152C17.4837 17.3222 17.1905 17.005 16.9962 16.8553C16.5468 16.5027 15.9527 16.2663 15.191 16.1324C14.932 16.0871 14.4654 16.0555 14.3512 16.0772Z" fill="#F04634"/>
                    <path d="M9.21726 21.7271C8.5679 22.0246 8.37176 26.4706 8.92591 28.3283C8.95828 28.4366 9.01541 28.5922 9.05159 28.6769L9.11824 28.8266L9.30105 28.8995C9.40388 28.9409 9.59051 29.0118 9.71809 29.0591L9.95042 29.1438L9.99993 29.0827C10.1351 28.9173 10.2284 28.5804 10.2761 28.082C10.3008 27.8181 10.3027 26.8233 10.2761 26.3387C10.1599 24.091 9.8552 22.3201 9.50291 21.8414C9.41341 21.7232 9.31438 21.6818 9.21726 21.7271Z" fill="#F04634"/>
                    <path d="M21.2867 22.0676C21.0487 22.1878 20.9116 22.7394 20.8887 23.6593C20.8544 25.0658 21.121 26.7422 21.5076 27.5774C21.6333 27.8453 21.6638 27.8729 21.8523 27.8808L21.9989 27.8887L22.1989 27.7665C22.5016 27.5794 23.071 27.1854 23.3586 26.9628C23.5985 26.7796 23.6195 26.7579 23.6576 26.6575C23.7261 26.4822 23.7623 26.3068 23.7623 26.1689C23.7604 25.5839 23.1358 23.9981 22.5264 23.0289C22.1113 22.373 21.7475 22.0341 21.4562 22.0341C21.3972 22.0341 21.321 22.0499 21.2867 22.0676Z" fill="#F04634"/>
                </svg>
            </div>
        </div>
        <div className={styles.contacts}>
            <h1>Контакты</h1>
            <div className={styles.phone}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_19_34)">
                        <path d="M3.00638 0.262281C2.83398 0.312082 2.70758 0.42308 1.69278 1.43408C0.375381 2.74768 0.440381 2.63668 0.444181 3.49068C0.455581 5.40548 1.75018 8.07488 3.94458 10.7099C5.22378 12.2457 7.37598 14.3789 9.24118 15.9491C12.4274 18.6413 15.2462 20.1119 16.51 19.7443C16.7054 19.6869 16.782 19.6179 18.0458 18.3579C19.436 16.9715 19.4858 16.9103 19.5508 16.5235C19.5662 16.4163 19.5546 16.2899 19.5124 16.1405C19.4512 15.9221 19.4166 15.8877 17.72 14.1835C16.5826 13.0461 15.9354 12.4257 15.832 12.3759C15.6406 12.2801 15.3264 12.2763 15.066 12.3605C14.9012 12.4179 14.7442 12.5597 13.76 13.5401C13.1434 14.1529 12.5766 14.6853 12.5038 14.7273C12.205 14.8843 12.4234 15.0759 8.58218 11.2575C6.65218 9.34268 5.05898 7.73788 5.04378 7.69208C5.02458 7.64608 5.01698 7.52348 5.02838 7.42408C5.04378 7.24028 5.04378 7.24028 6.15818 6.11808C7.41438 4.85808 7.46798 4.78528 7.46798 4.33348C7.46798 4.17268 7.44118 4.03088 7.39518 3.93128C7.34538 3.82788 6.74418 3.20368 5.58758 2.04708C3.72638 0.193481 3.72638 0.193481 3.35478 0.20108C3.27058 0.200882 3.11358 0.227682 3.00638 0.262281Z" fill="#FFF9F9"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_19_34">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <p>+7 (775) 218-83-48</p>
            </div>
            <div className={styles.phone}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.7315 5.8145L9.9815 10.2464C10.2587 10.3949 10.6173 10.4653 10.9781 10.4653C11.3389 10.4653 11.6975 10.3949 11.9747 10.2464L20.2247 5.8145C20.7626 5.5252 21.2708 4.3999 20.2841 4.3999H1.6732C0.686499 4.3999 1.1947 5.5252 1.7315 5.8145ZM20.4744 8.2378L11.9747 12.6675C11.6007 12.8633 11.3389 12.8864 10.9781 12.8864C10.6173 12.8864 10.3555 12.8633 9.9815 12.6675C9.6075 12.4717 2.1352 8.5546 1.5247 8.2367C1.0957 8.0123 1.1001 8.2752 1.1001 8.4776V16.4999C1.1001 16.9619 1.7227 17.5999 2.2001 17.5999H19.8001C20.2775 17.5999 20.9001 16.9619 20.9001 16.4999V8.4787C20.9001 8.2763 20.9045 8.0134 20.4744 8.2378Z" fill="white"/>
                </svg>
                <p>josfer@jojo.kz</p>
            </div>
        </div>
        <div className={styles.social}>
            <h1>Социальные сети</h1>
            <p>Следить за новостями нашей компании Вы можете на данный момент только в <span>Инстаграмме</span>:</p>
            <div className={styles.svgs}>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C12.717 0 13.056 0.0103444 14.122 0.0620669C15.187 0.113789 15.912 0.286543 16.55 0.543086C17.21 0.805836 17.766 1.16169 18.322 1.73581C18.8305 2.25292 19.2239 2.87847 19.475 3.56885C19.722 4.2278 19.89 4.97881 19.94 6.0805C19.987 7.18322 20 7.5339 20 10.3445C20 13.1551 19.99 13.5058 19.94 14.6085C19.89 15.7102 19.722 16.4602 19.475 17.1201C19.2247 17.8109 18.8311 18.4366 18.322 18.9532C17.8219 19.479 17.2173 19.886 16.55 20.1459C15.913 20.4014 15.187 20.5752 14.122 20.6269C13.056 20.6755 12.717 20.689 10 20.689C7.283 20.689 6.944 20.6786 5.878 20.6269C4.813 20.5752 4.088 20.4014 3.45 20.1459C2.78233 19.8868 2.17753 19.4797 1.678 18.9532C1.16941 18.4361 0.775933 17.8106 0.525 17.1201C0.277 16.4612 0.11 15.7102 0.0599999 14.6085C0.0129999 13.5058 0 13.1551 0 10.3445C0 7.5339 0.00999989 7.18322 0.0599999 6.0805C0.11 4.97777 0.277 4.22883 0.525 3.56885C0.775239 2.87801 1.16881 2.25233 1.678 1.73581C2.17767 1.20951 2.78244 0.802451 3.45 0.543086C4.088 0.286543 4.812 0.113789 5.878 0.0620669C6.944 0.0134477 7.283 0 10 0ZM10 5.17225C8.67394 5.17225 7.40217 5.71717 6.46444 6.68714C5.52678 7.65717 5 8.97276 5 10.3445C5 11.7162 5.52678 13.0318 6.46444 14.0019C7.40217 14.9718 8.67394 15.5167 10 15.5167C11.3261 15.5167 12.5978 14.9718 13.5356 14.0019C14.4732 13.0318 15 11.7162 15 10.3445C15 8.97276 14.4732 7.65717 13.5356 6.68714C12.5978 5.71717 11.3261 5.17225 10 5.17225ZM16.5 4.91364C16.5 4.57072 16.3683 4.24182 16.1339 3.9993C15.8994 3.75683 15.5815 3.62057 15.25 3.62057C14.9185 3.62057 14.6006 3.75683 14.3661 3.9993C14.1317 4.24182 14 4.57072 14 4.91364C14 5.25656 14.1317 5.58545 14.3661 5.82797C14.6006 6.07044 14.9185 6.2067 15.25 6.2067C15.5815 6.2067 15.8994 6.07044 16.1339 5.82797C16.3683 5.58545 16.5 5.25656 16.5 4.91364ZM10 7.24115C10.7957 7.24115 11.5587 7.56809 12.1213 8.15008C12.6839 8.73208 13 9.52142 13 10.3445C13 11.1676 12.6839 11.9569 12.1213 12.5389C11.5587 13.1209 10.7957 13.4478 10 13.4478C9.20433 13.4478 8.44128 13.1209 7.87867 12.5389C7.31606 11.9569 7 11.1676 7 10.3445C7 9.52142 7.31606 8.73208 7.87867 8.15008C8.44128 7.56809 9.20433 7.24115 10 7.24115Z" fill="#F5FAFF"/>
                </svg>
            </div>
        </div>

    </div>
}

export default FooterBlock;
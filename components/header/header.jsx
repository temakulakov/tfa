import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.root}>
      <Link href={"#"} style={{ order: "1" }}>
        Контакты
      </Link>
      <Link href={"/articles"} style={{ order: "2" }}>
        Статьи
      </Link>
      <Link className={styles.logo} href={"#"}>
        <svg
          width='57'
          height='34'
          viewBox='0 0 57 34'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_1_925)'>
            <path
              id='rect'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M55.1399 0H56.7899V33.15H55.1399V0Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.23 9.08988L19.01 12.3699V15.0399L9.23 12.4399V9.08988V9.08988ZM4.05 2.87988L13.79 6.87988V9.86988L4.04 6.59988L0 8.10988V4.71988L4.05 2.87988V2.87988ZM14.36 7.10988L23.98 11.0499V13.2799L14.36 10.0499V7.09988V7.10988ZM23.98 13.8999V16.3999L19.58 15.1799V12.5499L23.98 13.8899V13.8999ZM23.98 17.0799V19.5399L14.48 17.5999V14.5599L23.98 17.0799ZM23.98 20.2099V22.5299L19.58 21.9199V19.3399L23.98 20.2099V20.2099ZM23.98 23.1899V25.6599L14.36 25.0699V21.9899L23.98 23.1999V23.1899ZM23.98 26.4299V28.7899H19.58V26.1299L23.98 26.4299ZM19.01 28.7899H9.23V25.4299L19.01 26.0999V28.7999V28.7899ZM8.66 28.7899H0V25.3899L4.02 25.0699L8.67 25.3899V28.7899H8.66ZM0 24.6999V21.2299L4.04 20.6799L13.79 21.9099V25.0199L4.01 24.3499L0 24.6999ZM0 20.4199V17.0999L4.05 16.2299L8.64 17.1499V20.5399L4.09 19.9699H4.04L0 20.4199ZM0 16.4199V13.0699L4.05 11.7999L13.91 14.4199V17.4999L4.04 15.5199L0 16.4199ZM0 12.2999V8.83988L4.05 7.34988L8.66 8.89988V12.2899L4.03 11.0599L0 12.2999ZM19.01 21.8599L9.2 20.6199V17.2699L19.01 19.2399V21.8599Z'
              fill='#0085C4'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.05 2.87988V6.59988H4.04L0 8.10988V4.71988L4.05 2.87988V2.87988ZM4.05 7.34988V11.0599H4.04L0 12.2999V8.83988L4.05 7.34988ZM4.05 11.7899V15.5099H4.04L0 16.4099V13.0599L4.05 11.7899V11.7899ZM4.05 16.2299V19.9599L0.01 20.4099V17.0899L4.06 16.2199L4.05 16.2299ZM4.05 20.6799V24.3599H4.01L0 24.6899V21.2199L4.04 20.6699L4.05 20.6799ZM4.05 25.0699V28.7899H0V25.3899L4.02 25.0699H4.05Z'
              fill='#056EA5'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M44.8099 7.34988L48.8599 8.83988V12.2999L44.8199 11.0599C41.5999 11.9199 38.3899 12.7799 35.1699 13.6399V10.5199L44.8099 7.34988ZM34.4499 13.8299C31.2599 14.6899 28.0699 15.5499 24.8799 16.4099V13.9099L34.4499 10.7599V13.8399V13.8299ZM44.8399 25.0699L48.8599 25.3899V28.7899H35.2099V25.7299L44.8399 25.0699ZM34.4899 28.7899H24.8799V26.4299L34.4899 25.7799V28.7899ZM44.8099 20.6799L48.8499 21.2299V24.6999L44.8399 24.3599C43.3199 24.4599 41.7999 24.5699 40.2899 24.6699V21.2499L44.8099 20.6799ZM39.5699 24.7199C36.3599 24.9299 33.1499 25.1399 29.9399 25.3399V22.5499L39.5699 21.3399V24.7099V24.7199ZM29.2199 25.3899C27.7799 25.4799 26.3299 25.5699 24.8799 25.6599V23.1899L29.2199 22.6499V25.3899ZM44.7699 19.9699H44.8199L48.8599 20.4199V17.0999L44.8099 16.2299L35.1699 18.1599V21.1999L44.7699 19.9599V19.9699ZM34.4499 18.3099C31.2599 18.9499 28.0699 19.5799 24.8799 20.2099V22.5299L34.4499 21.2899V18.2999V18.3099ZM44.7999 11.7899L48.8499 13.0599V16.4099L44.8099 15.5099L40.2599 16.4199V12.9899L44.7899 11.7799L44.7999 11.7899ZM39.5499 16.5699C36.3499 17.2099 33.1499 17.8599 29.9599 18.5099V15.7399L39.5499 13.1899V16.5699ZM29.2399 18.6599L24.8799 19.5499V17.0899L29.2399 15.9299V18.6599ZM44.8199 6.59988L48.8599 8.10988V4.71988L44.8099 2.87988L40.2699 4.73988V8.11988L44.8199 6.58988V6.59988ZM39.5499 5.03988L29.9499 8.97988V11.5899L39.5499 8.36988V5.03988V5.03988ZM29.2299 9.27988L24.8799 11.0599V13.2899L29.2299 11.8299V9.26988V9.27988Z'
              fill='#056EA5'
            />
            <defs>
              <clipPath id='clip0_1_925'>
                <rect width='56.79' height='33.15' fill='white' />
              </clipPath>
            </defs>
          </g>
        </svg>
        <span>ТФА</span>
      </Link>
      <Link href={"#"} style={{ order: "4" }}>
        Товары
      </Link>
      <Link href={"#"} style={{ order: "5" }}>
        Аккаунт
      </Link>
    </div>
  );
};

export default Header;

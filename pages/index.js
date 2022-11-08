import Header from "../components/header/header";
import StartBlock from "../components/start-block/startBlock";
import ProductBlock from "../components/product-block/productBlock";
import CallBlock from "../components/callBlock/callBlock";
import ArticleBlock from "../components/articleBlock/articleBlock";
import CalcBlock from "../components/calcBlock/calcBlock";
import SocialBlock from "../components/socialBlock/socialBlock";
import FooterBlock from "../components/footerBlock/footerBlock";
import SenderBlock from "../components/senderBlock/senderBlock";
import Modal from "../components/modal/modal";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";


const Home = () => {


  const escHandler = (event) => {
    event.key === "Escape" ? store.setModal(0) : null;
    event.key === "Enter" ? store.setModal(0) : null;

    if (store.modal != 1) {
      event.key === " " ? store.setModal(0) : null;
      event.key === "Backspace" ? store.setModal(0) : null;}
  };

  const [more, setMore] = useState(false);
  const h2ref = useRef(null);
  useEffect(() => {
    document.addEventListener("keydown", escHandler);
  }, []);
  useEffect(() => {
    if (more == true) {
      h2ref.current.scrollIntoView();
      setMore(false);
    }
  }, [more]);

  return (
    <>
      <div
        className={"root"}
        style={store.modal ? { transform: "scale(0.97)" } : {}}>
        <Head>
          <title>Термо Фасад Алматы</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <StartBlock more={more} setMore={setMore} />
        <ProductBlock/>
        <CallBlock h2ref={h2ref} />
        <ArticleBlock />
        {/*<CalcBlock/>*/}
        <SocialBlock />
        <SenderBlock />
        <FooterBlock />
      </div>
      <Modal />
    </>
  );
};

export default observer(Home);

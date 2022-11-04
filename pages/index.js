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
import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";

const Home = () => {
  const [more, setMore] = useState(false);
  const h2ref = useRef(null);
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
        <ProductBlock />
        <CallBlock h2ref={h2ref} />
        <ArticleBlock />
        {/*<CalcBlock/>*/}
        <SocialBlock />
        <SenderBlock />
        <FooterBlock />
      </div>
      <Modal></Modal>
    </>
  );
};

export default observer(Home);

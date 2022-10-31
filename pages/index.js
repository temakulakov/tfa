import Header from "../components/header/header";
import StartBlock from "../components/start-block/startBlock";
import ProductBlock from "../components/product-block/productBlock";
import CallBlock from "../components/callBlock/callBlock";
import ArticleBlock from "../components/articleBlock/articleBlock";
import CalcBlock from "../components/calcBlock/calcBlock";
import SocialBlock from "../components/socialBlock/socialBlock";
import FooterBlock from "../components/footerBlock/footerBlock";
import SenderBlock from "../components/senderBlock/senderBlock";
import Head from "next/head";

export default function Home() {
  return <>
    <Head>
      <title>Термо Фасад Алматы</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
      <StartBlock/>
      <ProductBlock/>
      <CallBlock/>
      <ArticleBlock/>
      {/*<CalcBlock/>*/}
      <SocialBlock/>
      <SenderBlock/>
      <FooterBlock/>
  </>
}

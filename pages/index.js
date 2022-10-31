import Header from "../components/header/header";
import StartBlock from "../components/start-block/startBlock";
import ProductBlock from "../components/product-block/productBlock";
import CallBlock from "../components/callBlock/callBlock";
import ArticleBlock from "../components/articleBlock/articleBlock";
import CalcBlock from "../components/calcBlock/calcBlock";
import SocialBlock from "../components/socialBlock/socialBlock";
import FooterBlock from "../components/footerBlock/footerBlock";
import SenderBlock from "../components/senderBlock/senderBlock";

export default function Home() {
  return <>
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

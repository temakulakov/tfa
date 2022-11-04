import store from "../../store/store";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const Modal = observer(() => {
  return (
    <div
      className={store.modal ? "modal active" : "modal"}
      onClick={() => {
        store.setModal(0);
      }}>
      <div
        className={store.modal ? "modal active content" : "modal content"}
        onClick={(e) => e.stopPropagation()}>
        {store.modal == 1 ? (
          <>
            <p>Закажите фасад для своего дома</p>
            <p>Оставьте заявку и менеджер свяжется с Вами в течении 10 минут</p>
            <div className={"search"}>
              <input type='text' name='' required='' />
              <label>Ваше имя</label>
            </div>
            <div className={"search"}>
              <input type='text' name='' required='' />
              <label>Ваш номер</label>
            </div>
            <div className={"search"}>
              <input type='text' name='' required='' />
              <label>Ваша почта*</label>
            </div>
            <button className='button button--atlas'>
              <span>Отправить</span>
              <div
                className='marquee'
                aria-hidden='true'
                style={{ background: "#0091CD" }}>
                <div className='marquee__inner'>
                  <span>Отправить</span>
                  <span>Отправить</span>
                  <span>Отправить</span>
                  <span>Отправить</span>
                </div>
              </div>
            </button>
          </>
        ) : null}
        {store.modal == 2 ? (
          <>
            <div className='carusel'>
              <Carousel>
                <Carousel.Item>
                  <Image
                    style={{
                      height: "100vw",
                      width: "30vw",
                      maxHeight: "500px",
                      maxWidth: "500px",
                      overflow: "hidden",
                    }}
                    src={store.data[store.number - 1].img[0]}
                    alt={store.data[store.number - 1].title}
                    width={200}
                    height={200}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    style={{ height: "80%", width: "100%" }}
                    src={store.data[store.number - 1].img[1]}
                    alt={store.data[store.number - 1].title}
                    width={200}
                    height={200}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <p>{store.data[store.number - 1].title}</p>
            <p>{store.data[store.number - 1].description}</p>
          </>
        ) : // <>
        //   <div className='images' style={{ height: "50%", width: "50%" }}>
        //     <Image
        //       style={{ height: "100%", width: "100%" }}
        //       layout='fill'
        //       src={store.data[store.number - 1].img[0]}
        //       alt={store.data[store.number - 1].title}
        //       width={200}
        //       height={200}
        //     />
        //     <Image
        //       style={{ height: "100%", width: "100%" }}
        //       layout='fill'
        //       src={store.data[store.number - 1].img[1]}
        //       alt={store.data[store.number - 1].title}
        //       width={200}
        //       height={200}
        //     />
        //   </div>
        //   <p>{store.data[store.number - 1].title}</p>
        //   <p>{store.data[store.number - 1].description}</p>
        // </>
        null}
      </div>
    </div>
  );
});

export default Modal;

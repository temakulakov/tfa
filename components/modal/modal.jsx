import store from "../../store/store";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useRef } from "react";

const Modal = observer(() => {
  const prevHandler = () => {
    slider.current.childNodes.forEach((element, index) => {
      index != 0 && index != 3
        ? (element.style = "transform: translateX(0)")
        : "";
    });
  };
  const nextHandler = () => {
    slider.current.childNodes.forEach((element, index) => {
      index != 0 && index != 3
        ? (element.style = "transform: translateX(-100%)")
        : "";
    });
  };
  const slider = useRef(null);
  const modalRef = useRef(null);
  return (
    <div
      className={store.modal ? `modal active ` : "modal"}
      onClick={() => {
        store.setModal(0);
      }}
      ref={modalRef}>
      <div
        className={
          store.modal
            ? `modal active content ${store.modal == 2 ? "card" : ""}`
            : "modal content"
        }
        onClick={(e) => e.stopPropagation()}>
        <div className='close_modal'>
          <div onClick={() => store.setModal(0)}>
            <h1>✕</h1>
          </div>
        </div>
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

            <button
              className='button button--atlas cups'
              style={{ padding: "12px 48px 12px 48px" }}>
              <span>Отправить</span>
              <div
                className='marquee cupi'
                aria-hidden='true'
                style={{ background: "#0091CD" }}>
                <div className='marquee__inner cup'>
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
              <div className='card_buttons'>
                <div className='button back' onClick={() => prevHandler()}>
                  <div className=' button shadw'>{"<"}</div>
                </div>
                <div className='button next' onClick={() => nextHandler()}>
                  <div className=' button shadw'>{">"}</div>
                </div>
              </div>
              <div className='background' ref={slider}>
                <Image
                  alt={"content"}
                  src={store.data[store.number - 1].img[0]}
                  width={200}
                  height={200}
                />
                <Image
                  alt={"content"}
                  src={store.data[store.number - 1].img[1]}
                  width={200}
                  height={200}
                />
              </div>
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

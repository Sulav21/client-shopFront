import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../components/cart/CartAction";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import "./productClick.css";
const products = [
  {
    _id: "1",
    title: "Nike Shoes",
    src: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/300bd51f-3ce1-473c-95d2-f8053a327a7d/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2159ba1-3625-4604-ac79-64355a8b67b0/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4c76b49a-1e27-46d4-99ca-7a99a0306113/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccae9e3e-2f66-45db-9384-3a26815b6815/zion-2-basketball-shoes-XjhskN.png",
    ],
    description: "Zion 2",
    content: "The New Zion Shoes",
    price: 230,
    colors: ["red", "black", "crimson", "teal"],
    count: 1,
  },
];

export const ProductClick = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch= useDispatch()
  // const [cartNumber, setCartNumber] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const handleOnAddToCart = (product) => {
    dispatch(cartAction(product))
    // console.log(product);
  };

  const handleTab = (index) => {
    // alert(index);
    setImageIndex(index);
  };
  const handleOnClick = (index) => {
    handleTab(index);
  };

  return (
    <DefaultLayout className="prodView">
      <Container>
        {products.map((item, index) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              {/* <img src={item.src[index]} alt="" /> */}
              <img src={item.src[imageIndex]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb">
                {item.src.map((img, index) => (
                  <img
                    src={img}
                    className={index === imageIndex ? "active" : ""}
                    alt=""
                    key={index}
                    onClick={() => handleOnClick(index)}
                  />
                ))}
              </div>

              <button className="cart" onClick={() => handleOnAddToCart(item)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </Container>
    </DefaultLayout>
  );
};

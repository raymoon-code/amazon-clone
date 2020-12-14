import React from "react";
import "./Product.css"
import {useStateValue} from "./StateProvider";
import {useSpring, animated} from 'react-spring'


function Product( {id ,title, image, price, rating}) {
      const [{basket}, dispatch] = useStateValue();
      const calc = (x, y) => [0,0,1.04]

      const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
      const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
      console.log('this is the basket >>>',basket);

      const addToBasket = () =>{
          //dispatch the item into the data layer
          dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title:title,
                image: image,
                price: price,
                rating: rating,
              },
          });
      };
    return (
        // BEM
        <animated.div className="card"
                      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                      onMouseLeave={() => set({ xys: [0, 0, 1] })}
                      style={{ transform: props.xys.interpolate(trans) }}>
        <div className="product">
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐ </p>
                        ))}
                </div>
            </div>
            <img   src={image}  alt=''     />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
        </animated.div>
    );
}

export default Product;
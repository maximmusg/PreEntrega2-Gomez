import "./styles.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(0);
  const stock = 5;
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    addItem(itemSelected, count);
  };

  const handleNavigation = () => {
    navigate("/cart");
  };

  return (
    <div className="item__details">
      <div className="card__image">
        <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
      </div>
      <div className="card__description">
        <h1 className="product__title">{itemSelected?.title}</h1>
        <p className="product__description">{itemSelected?.description}</p>
        <p className="product__price">${itemSelected?.price}</p>
        <span>Stock: {stock}</span>
        <div>
          <button onClick={handleNavigation} className="btn btn-primary">
            Ver el carrito
          </button>
          <button onClick={addToCart} className="btn btn-primary">
            Agregar al carrito
          </button>
          <ItemCount count={count} setCount={setCount} stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

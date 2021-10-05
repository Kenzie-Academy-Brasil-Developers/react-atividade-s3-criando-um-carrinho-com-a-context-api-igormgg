import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import Button from "../Button";
import "./styles.css";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <ul className="productsContainer">
      {type === "catalogue" && (
        <div className="catalogBox">
          <h1>Catálogo</h1>
          {catalogue.map((item, index) => (
            <li key={index}>
              {item.name} <Button type={type} item={item} />
            </li>
          ))}
        </div>
      )}

      {type === "cart" && (
        <div className="cartBox">
          <h1>Carrinho</h1>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} <Button type={type} item={item} />
            </li>
          ))}
        </div>
      )}
    </ul>
  );
};

export default ProductList;

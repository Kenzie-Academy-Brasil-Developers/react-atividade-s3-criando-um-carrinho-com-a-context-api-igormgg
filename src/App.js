import "./App.css";
import ProductList from "./components/Product-list";
import { CartProvider } from "./providers/cart";
import { CatalogueProvider } from "./providers/catalogue";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;

import "./reset.css";
import "./App.css";
import ProductList from "./components/Product-list";
import { CartProvider } from "./providers/cart";
import { CatalogueProvider } from "./providers/catalogue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Criando um carrinho com a ContextAPI
      </header>
      <main>
        <CatalogueProvider>
          <CartProvider>
            <ProductList type="catalogue" />
            <ProductList type="cart" />
          </CartProvider>
        </CatalogueProvider>
      </main>
    </div>
  );
}

export default App;

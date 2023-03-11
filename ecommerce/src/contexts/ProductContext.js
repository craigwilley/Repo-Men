import React, {createContext, useState, useEffect} from 'react';

// Create context
export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  // Product state
  const [products, setProducts] = useState([]);
  // Fetch products
  useEffect(()=>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={{products}}>{children}
  </ProductContext.Provider>;
};

export default ProductProvider;

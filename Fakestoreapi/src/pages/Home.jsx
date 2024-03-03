
import React, { useEffect, useState } from 'react';
import '../scss/home.scss';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../components/addtocard/CartSummary'
import CartSummary from '../components/addtocard/CartSummary';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from '../components/redux/slices/cartSlice';



const Home = () => {

  const darkMode=useSelector((state)=> state.theme.darkMode); 

  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const addToCartHandler = (product) =>{
    console.log(product)
    dispatch(addToCart(product));
    saveCartToLocalStorage(cart);
     
  };

  const removeFromCartHandler=(productId)=>{
    dispatch(removeFromCart(productId));
    saveCartToLocalStorage(cart);
  };

  const decrementQuantityHandler= (productId)=>{
    dispatch(decrementQuantity(productId));
    saveCartToLocalStorage(cart);
  }


  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

 
const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : null;
};

  const [product, setProduct] = useState([]);
  const [carts, setCart] = useState({
    items: [],
    total: 0 ,  
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setProduct(res));
    console.log("request atildi");
  }, []);

  return (
    <>
      <main className={darkMode ? "": "active"}>
        <section className='productList'>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {product.map((product) => (
              <Grid key={product.id} item xs={2} sm={4} md={4}>
                <Link to={`/${product.id}`}>
                  <Card className='card' sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.Description}
                        </Typography>
                        <h2 variant="body2" color="text.secondary">
                          {product.price} AZN
                        </h2>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
                <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
                <button onClick={() => removeFromCartHandler(product.id)}>Remove from Cart</button>
                <div className="quantity">
                  <button onClick={() => addToCartHandler(product)}>+</button>
                  <button onClick={() =>decrementQuantityHandler(product.id)}>-</button>
                </div>
              </Grid>
            ))}
          </Grid>
        </section>
        <section className='cartSummary'>
        <CartSummary product={product} cart={cart} />
        </section>
      </main>
    </>
  );
};

export default Home;

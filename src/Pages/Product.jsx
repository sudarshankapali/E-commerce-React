import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/Bredcrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import CartItems from '../Components/CartItems/CartItems';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId } = useParams();
  const product = all_product.find((e)=>e.id == productId)
  console.log(product)
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
      <CartItems />
    </div>
  )
}

export default Product
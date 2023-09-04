import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCart } from '@/redux/cartSlice';
export default function CartBadge() {
  const cart=useSelector(selectCart);
  const {quantity}=cart;
  return (
    <Badge className='mr-2' badgeContent={quantity?quantity:"0"} color="error">
      <ShoppingCartIcon className='text-[#1A1D3A]' />
    </Badge>
  );  
}
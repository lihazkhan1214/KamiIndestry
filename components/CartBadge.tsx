import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartBadge() {
  return (
    <Badge className='mr-2' badgeContent={2} color="error">
      <ShoppingCartIcon className='text-[#1A1D3A]' />
    </Badge>
  );  
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/navigation';


export default function CategoryCard() {
  const router=useRouter();
  return (
    <Card className="mx-2" sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>router.push('/product/123')}>
        <CardMedia
          component="img"
          height="80"
          image="/featuredproduct1.png"
          alt=""
        />
        <CardContent>
            <div className='flex justify-between'>
        <Typography className='cardheading' gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <div className=" mb-3 flex justify-center items-center">
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />

                </div>
         
          </div >
          <Typography className='flex justify-between' gutterBottom  component="div">
            <span className='text-lg font-medium text-[#292929]'>Price:</span><span>$4.5</span>
          </Typography>
         
          <Typography className='text-justify text-[#424242]' variant="body2"  color="text.secondary">
          KAMI EYELASH for Volume Fans Professional Precision Stainless Steel Non-Slip Tip Eyelash Tweezers Curved Lash Extensions Tweezers Eyelash Extension Tools by GEMERRY</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className='w-full border-[#1D1D1D] border-2 py-2 font-bold text-[#2D2C40]'  onClick={()=>router.push('/cart')} >
          Add Card
        </button>
      </CardActions>
    </Card>
  );
}
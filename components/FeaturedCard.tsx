import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
// import { useRouter } from 'next/router';



export default function FeaturedCard() {
  // const router=useRouter();
  // console.log(router)

  return (
   
    <Card className="mx-2" sx={{ maxWidth: 345 }}>
   
      <CardActionArea>
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
          <Typography gutterBottom  component="div">
            $4.5
          </Typography>
          </div >
          <div className=" mb-3 flex justify-center items-center">
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />
                    <StarIcon style={{ color: "#FBA122" }} />

                </div>
          <Typography className='text-justify text-[#424242]' variant="body2"  color="text.secondary">
          KAMI EYELASH for Volume Fans Professional Precision Stainless Steel Non-Slip Tip Eyelash Tweezers Curved Lash Extensions Tweezers Eyelash Extension Tools by GEMERRY</Typography>
        </CardContent>
     
      </CardActionArea>
      
      <CardActions>
        <button className='w-full border-[#1D1D1D] border-2 py-2 font-bold text-[#2D2C40]'   >
          Add Card
        </button>
      </CardActions>
    </Card>
  );
}
/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ["res.cloudinary.com"],
    },
  
   env:{
    dburl: 'mongodb+srv://welldatabase:lihaz1212@cluster0.qva8alg.mongodb.net/Kami?retryWrites=true&w=majority'
   }


};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // Add your domain(s) here
   backgroundimages:{ 'project-img': "url('/project.png')",
    'footer-texture': "url('/img/footer-texture.png')",
    'stactic card': "url('/Rectangle 1.png')",
    'aboutbakground': "url('/aboutbg.png')",
    'aboutcontactbakground': "url('/aboutcontactbg.png')",
    'contactbakground': "url('/contactbg.jpg')",
    'productbakground': "url('/productbg.jpg')",
    'cartbakground': "url('/cartbg.jpg')"}
  },
 
  
  
};

module.exports = nextConfig;

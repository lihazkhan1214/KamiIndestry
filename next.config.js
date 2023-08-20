/** @type {import('next').NextConfig} */
const nextConfig = {
  extend: {
    backgroundImage: {
      'project-img': "url'/project.png')",
      'footer-texture': "url('/img/footer-texture.png')",
      'stactic card': "url('/Rectangle 1.png')",
      'aboutbakground': "url('/aboutbg.png')",
      'aboutcontactbakground': "url('/aboutcontactbg.png')",
      'contactbakground': "url('/contactbg.jpg')",
      'productbakground': "url('/productbg.jpg')",
      'cartbakground': "url('/cartbg.jpg')",
    }
  },
    images: {
        domains: ['encrypted-tbn0.gstatic.com'], // Add your domain(s) here
      },
}

module.exports = nextConfig

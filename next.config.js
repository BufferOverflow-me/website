module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [{
            source: '/blog',
            destination: 'https://blog.bufferoverflow.me',
            permanent: true,
        }]
    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'images.unsplash.com',
            'media.istockphoto.com',
            'img.icons8.com',
            'tailwindui.com'
        ]
    }
}
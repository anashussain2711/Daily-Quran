require('dotenv').config();
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');


const hostname = process.env.REACT_APP_HOSTNAME || 'https://www.example.com';

const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/contact', changefreq: 'daily', priority: 0.8 },
    { url: '/about', changefreq: 'daily', priority: 0.8 },
];

// Create a writable stream to generate the sitemap
const stream = new SitemapStream({ hostname });

// Pipe each URL to the stream
urls.forEach(url => {
    stream.write(url);
});
stream.end();

// Convert the stream to a string
streamToPromise(stream).then(xml => {
    // Write the XML to a file
    fs.writeFileSync('./public/sitemap.xml', xml);
}).catch(error => {
    console.error('Error generating sitemap:', error);
});
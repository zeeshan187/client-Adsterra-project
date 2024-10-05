export default function handler(req, res) {
  const adsterraLink = 'https://capefast.com/wwha61gfm9?key=a893b2f960ec7abf692a83d0582ddbe8';

  // Wait for 1 second before redirecting
  setTimeout(() => {
    res.writeHead(302, {
      Location: adsterraLink,
    });
    res.end();
  }, 1000);
}

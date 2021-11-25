const priceRand = parseInt(Math.floor(Math.random() * (150 - 350) - 150));
const qtyRand = Number(Math.floor(Math.random() * (1 * 15) - 1));

const brandLogos = {
    jordan: 'https://www.nicekicks.com/files/2020/06/air-jordan-jumpman-logo.jpg',
    adidas: 'https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg',
    nike: 'https://thumbs.dreamstime.com/b/web-183282388.jpg'
    }

module.exports = [
    {
        name: 'Jordan 1 Retro Cool Grey',
        description: 'Since its debut in 2001, the Air Jordan 11 Cool Grey has become one of the most celebrated colorways in the Jordan 11 catalog.The Air Jordan 11 Cool Grey (2021) features a Cool Grey Durabuck upper with patent leather overlays and and a signature Jumpman embroidery on the collar. From there, a white midsole and an icy blue translucent outsole completes the design.',
        img: 'https://cdn.flightclub.com/TEMPLATE/248952/1.jpg',
        price: 269,
        qty: 5,
        color: 'Grey',
        brand: 'Jordan',
        brandLogo: brandLogos.jordan
    }
]
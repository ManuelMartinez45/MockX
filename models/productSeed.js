const priceRand = parseInt(Math.floor(Math.random() * (150 - 350) - 150));
const qtyRand = Number(Math.floor(Math.random() * (1 * 15) - 1));

const brandLogos = {
    jordan: 'https://www.nicekicks.com/files/2020/06/air-jordan-jumpman-logo.jpg',
    adidas: 'https://njmarlins.com/wp-content/uploads/sites/692/2015/04/adidas-logo.jpg',
    nike: 'https://thumbs.dreamstime.com/b/web-183282388.jpg',
    yeezy: 'https://1000logos.net/wp-content/uploads/2017/08/Logo-Yeezy.jpg'
    }

module.exports = [
    {
        name: 'Jordan 11 Retro "Cool Grey"',
        description: 'Since its debut in 2001, the Air Jordan 11 Cool Grey has become one of the most celebrated colorways in the Jordan 11 catalog.The Air Jordan 11 Cool Grey (2021) features a Cool Grey Durabuck upper with patent leather overlays and and a signature Jumpman embroidery on the collar. From there, a white midsole and an icy blue translucent outsole completes the design.',
        img: 'https://cdn.flightclub.com/TEMPLATE/248952/1.jpg',
        color: 'Grey',
        brand: 'Jordan',
        brandLogo: brandLogos.jordan
    },
    {
        name: 'Yeezy Boost 700 "Sun"',
        description: 'After a year hiatus with no new colorways, Yeezy brought back the original 700 silhouette in 2021 with the adidas Yeezy Boost 700 Sun.',
        img: 'https://sixfiguresneakerhead.com/media/adidas-Yeezy-Boost-700-Sun-Price-2.jpg',
        color: 'Yellow',
        brand: 'Yeezy',
        brandLogo: brandLogos.yeezy
    },
    {
        name: 'Jordan 4 Retro "Bred"',
        description: 'Get some bred while rocking the Jordan 4 Retro Bred 2019 (GS). This AJ 4 comes with a black upper plus grey accents, white midsole plus black accents, and a red sole plus grey accents. These sneakers released in May 2019 and retailed for $140.', 
        img: 'https://sneakernews.com/wp-content/uploads/2019/05/air-jordan-4-bred-2019-release-date-4.jpg?w=1140',
        color: 'Black',
        brand: 'Jordan',
        brandLogo: brandLogos.jordan
    },
    {
        name: 'Nike Sacai Waffle "Fragment Grey"',
        description: 'The Nike LDWaffle sacai Fragment Grey features a grey mesh upper with layered suede overlays and white leather doubled Swooshes. On the side of the doubled sole, both sacai and Fragment branding is printed in black. From there, a doubled tongue with woven labels completes the design.',
        img: 'https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_fragment-x-sacai-x-nike-ldwaffle-light-smoke-grey.jpeg',
        color: 'Grey',
        brand: 'Nike',
        brandLogo: brandLogos.nike
    },
    {
        name: 'Yeezy Boost 350 V2 "Blue Tint"',
        description: 'In a similar pattern to the renowned adidas Yeezy Boost 350 V2 Zebra, the adidas Yeezy Boost 350 V2 Blue Tint features a marbled grey Primeknit upper with a light grey side stripe that is decorated with bright red SPLY-350 text. At the base, a Blue Tint semi-translucent Boost sole adds cushioning and support.',
        img: 'https://cdn.flightclub.com/TEMPLATE/802390/1.jpg',
        color: 'Grey',
        brand: 'Yeezy',
        brandLogo: brandLogos.adidas
    },
    {
        name: 'Nike Dunk Low "Michigan"',
        description: 'The upper of the Nike Dunk Low Michigan is made of Varsity Maize leather with Midnight Navy overlays and Swoosh logos. A woven Nike label stitched to the tongue and “NIKE” text embroidered on the heel complete the design.',
        img: 'https://sneakernews.com/wp-content/uploads/2020/12/Nike-Dunk-Low-Michigan-2021-0.jpg',
        color: 'Yellow Blue',
        brand: 'Nike',
        brandLogo: brandLogos.nike
    },
    {
        name: 'OFF WHITE Black Air Max 90',
        description: 'It’s officially 2019 and Virgil is back applying pressure on the sneaker world with the release of the Air Max 90 Off-White Black. This AM 90 is sporting a black upper, white Nike “Swoosh”, black midsole, and a black sole. These sneakers released in January 2019 and retailed for $160. The Virgil x Nike World Tour continues, so don’t miss out and place a Bid on StockX today.',
        img: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/017/763/491/original/466439_01.jpg.jpeg?1547150496',
        color: 'Black',
        brand: 'Nike',
        brandLogo: brandLogos.nike
    },
    {
        name: 'Jordan 4 Retro "University Blue"',
        description: 'Jordan Brand paid homage to MJ’s alma mater with the Air Jordan 4 University Blue. The University Blue colorway draws a close resemblance to the extremely rare Air Jordan 4 UNC PE that was given to Tarheel student-athletes in 2019.',
        img: 'https://cdn.shopify.com/s/files/1/0255/9429/8467/products/air-jordan-4-university-blue-CT8527-400_1_1800x1800.jpg?v=1629477566',
        color: 'Blue',
        brand: 'Jordan',
        brandLogo: brandLogos.jordan

    }
]
fetch('template.hbs')
    .then(data => data.text())
    .then(data => {

        const template = Handlebars.compile(data)
        const input =
        {
            name: "Headphones",
            desc: "a pair of headphones",
            price: 45.99,
            originalPrice: 75,
            discount: 45,
            image: "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"
        }
        const html = template(input)
        document.querySelector('.featured-gallery').innerHTML = html
    })
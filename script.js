fetch('template.hbs')
    .then(data => data.text())
    .then(data => {
        const template = Handlebars.compile(data)

        fetch('items.json')
            .then(response => response.json())
            .then(response => {
                response.products.sort(() => .5 - Math.random())
                const html = template(response)
                document.querySelector('.featured-gallery').innerHTML = html
            })
    })
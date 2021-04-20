fetch('template.hbs')
    .then(data => data.text())
    .then(data => {
        const template = Handlebars.compile(data)

        fetch('items.json')
            .then(response => response.json())
            .then(response => {
                const html = template(response)
                document.querySelector('.featured-gallery').innerHTML = html
            })
    })
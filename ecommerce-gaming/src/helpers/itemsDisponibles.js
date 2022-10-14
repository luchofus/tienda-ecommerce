export const productos = [
    {id: "1", name: 'Elden Ring', price: 5400, categoria: 'Acción', image:'../src/images/elden-ring.jpg'},
    {id: "2", name: 'FIFA 23', price: 7000, categoria: 'Deportes', image:'../src/images/fifa-23.jpg'},
    {id: "3", name: 'God of War IV', price: 10000, categoria: 'Acción', image:'../src/images/god-of-war.jpg'},
    {id: "4", name: 'Call of Duty: Modern Warfare', price: 6000, categoria: 'Disparos', image:'../src/images/call-of-duty.jpg'},
    {id: "5", name: 'Gran Turismo 7', price: 4000, categoria: 'Deportes', image:'../src/images/gran-turismo.jpg'},
    {id: "6", name: 'Lego Star Wars: The Skywalker saga', price: 3700, categoria: 'Aventura', image:'../src/images/lego-star-wars.jpg'},
    {id: "7", name: 'Grand Theft Auto V', price: 4500, categoria: 'Acción', image:'../src/images/gta.jpg'},
    {id: "8", name: 'Overwatch 2', price: 3700, categoria: 'Disparos', image:'../src/images/overwatch.jpg'},
    {id: "9", name: 'NBA 2K23', price: 6500, categoria: 'Deportes', image:'../src/images/nba.jpg'},
    {id: "10", name: 'Horizon Zero Dawn', price: 4500, categoria: 'Acción', image:'../src/images/horizon.jpg'},
    {id: "11", name: 'Uncharted 4', price: 5000, categoria: 'Aventura', image:'../src/images/uncharted.jpg'},
    {id: "12", name: 'UFC 4', price: 4900, categoria: 'Deportes', image:'../src/images/ufc.png'},
    {id: "13", name: 'Red Dead Redemption 2', price: 5100, categoria: 'Acción', image:'../src/images/rdd.jpg'},
    {id: "14", name: "Marvel's Spider-Man", price: 5500, categoria: 'Aventura', image:'../src/images/spiderman.jpg'},
    {id: "15", name: 'The Callisto Protocol', price: 3300, categoria: 'Terror', image:'../src/images/tcp.jpg'}
]

export const getProductos = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 3000)
    })
}
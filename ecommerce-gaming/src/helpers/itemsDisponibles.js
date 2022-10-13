export const productos = [
    {id: "1", name: 'Elden Ring', price: 5400, category: 'Acción'},
    {id: "2", name: 'FIFA 23', price: 7000, category: 'Deportes'},
    {id: "3", name: 'God of War: Ragnarok', price: 10000, category: 'Acción'},
    {id: "4", name: 'Call of Duty: Modern Warfare', price: 6000, category: 'Disparos'},
    {id: "5", name: 'Gran Turismo 7', price: 4000, category: 'Deportes'},
    {id: "6", name: 'Lego Star Wars: The Skywalker saga', price: 3700, category: 'Aventura'},
    {id: "7", name: 'Grand Theft Auto V', price: 4500, category: 'Acción'},
    {id: "8", name: 'Overwatch 2', price: 3700, category: 'Disparos'},
    {id: "9", name: 'NBA 2K23', price: 6500, category: 'Deportes'},
    {id: "10", name: 'Horizon Zero Dawn', price: 4500, category: 'Acción'},
    {id: "11", name: 'Uncharted 4', price: 5000, category: 'Aventura'},
    {id: "12", name: 'UFC 2K23', price: 4900, category: 'Deportes'},
    {id: "13", name: 'Red Dead Redemption 2', price: 5100, category: 'Acción'},
    {id: "14", name: "Marvel's Spider-Man", price: 5500, category: 'Aventura'},
    {id: "15", name: 'The Callisto Protocol', price: 3300, category: 'Terror'}
]

export const getProductos = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 3000)
    })
}
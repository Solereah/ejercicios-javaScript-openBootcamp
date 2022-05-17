const listaCompras = ['Papa', 'Pollo', 'Tomate', 'Leche', 'Queso']
listaCompras.push('Aceite de Girasol')
listaCompras.pop()

const peliculasFavoritas = [

    {
        titulo:'Mujeres al borde de un ataque de nervios',
        director:'Pedro Almodovar',
        fecha:new Date(1988, 8, 15)
    },
    {
        titulo:'Amigos intocables',
        director:['Olivier Nakache', 'Eric Toledano'],
        fecha:new Date(2012, 7, 2)
    },
    {
        titulo:'Carol',
        director:'Todd Haynes',
        fecha:new Date(2016, 2, 15)
    },
]

const peliculasFiltradas = peliculasFavoritas.filter(pelicula =>pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculasFavoritas.map(pelicula=> pelicula.director)

const titulos = peliculasFavoritas.map(pelicula=> pelicula.titulo)

const listaConcat = directores.concat(titulos)

const nuevaListaSpread = [...directores, ...titulos]



import people from '@/public/images/categories/people.png'
import films from '@/public/images/categories/films.png'
import starships from '@/public/images/categories/starships.png'
import vehicles from '@/public/images/categories/vehicles.png'
import species from '@/public/images/categories/species.png'
import planets from '@/public/images/categories/planets.png'

export enum Categories {
  People = 'people',
  Films = 'films',
  Starships = 'starships',
  Vehicles = 'vehicles',
  Species = 'species',
  Planets = 'planets'
}

export const categoriesList: Array<{
  title: Categories
  src: string
}> = [
  {
    title: Categories.People,
    src: people
  },
  {
    title: Categories.Films,
    src: films
  },
  {
    title: Categories.Starships,
    src: starships
  },
  {
    title: Categories.Vehicles,
    src: vehicles
  },
  {
    title: Categories.Species,
    src: species
  },
  {
    title: Categories.Planets,
    src: planets
  }
]

import type { CategoriesList } from './types'
import people from '@/public/images/categories/people.png'
import films from '@/public/images/categories/films.png'
import starships from '@/public/images/categories/starships.png'
import vehicles from '@/public/images/categories/vehicles.png'
import species from '@/public/images/categories/species.png'
import planets from '@/public/images/categories/planets.png'

export const categoriesList: CategoriesList = [
  {
    title: 'people',
    src: people
  },
  {
    title: 'films',
    src: films
  },
  {
    title: 'starships',
    src: starships
  },
  {
    title: 'vehicles',
    src: vehicles
  },
  {
    title: 'species',
    src: species
  },
  {
    title: 'planets',
    src: planets
  }
]

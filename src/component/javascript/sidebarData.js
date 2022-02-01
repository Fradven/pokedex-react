import { GiPokecog, GiCompactDisc } from 'react-icons/gi'
import { CgPokemon } from 'react-icons/cg'

export const SidebarData = [
    {   
        title: 'Home',
        path: '/',
        icon: <GiCompactDisc />
    },
    {   
        title: 'Pokedex',
        path: '/pokedex',
        icon: <CgPokemon />
    },
    {   
        title: 'Movedex',
        path: '/movedex',
        icon: <GiPokecog />
    },
    {   
        title: 'Random Pokémon',
        path: '/rdmPokemon',
        icon: <CgPokemon />
    }
    
]
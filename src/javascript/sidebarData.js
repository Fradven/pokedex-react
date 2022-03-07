import { GiPokecog, GiCompactDisc } from 'react-icons/gi'
import { CgPokemon } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'

export const SidebarData = [
    {   
        title: 'Home',
        path: '/',
        icon: <GiCompactDisc />
    },
    {   
        title: 'Search',
        path: '/searchBar',
        icon: <FiSearch />
    },
    {   
        title: 'Infinite List',
        path: '/pokedex',
        icon: <CgPokemon />
    },
    {   
        title: 'Movedex',
        path: '/movedex',
        icon: <GiPokecog />
    }
    
]
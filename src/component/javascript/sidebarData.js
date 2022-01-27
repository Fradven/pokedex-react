import { GiPokecog, GiCompactDisc } from 'react-icons/gi'
import { CgPokemon } from 'react-icons/cg'
import { MdCatchingPokemon } from 'react-icons/md'

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
    }
    
]
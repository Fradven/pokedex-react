import React, { useState, useEffect } from 'react'
import TypeTable from './TypeTable'

interface Props {
    primary: string
    secondary: string
}
const TypeChart: React.FC<Props> = ({ primary, secondary }) => {
    const [normal, setNormal] = useState(1)
    const [fire, setFire] = useState(1)
    const [water, setWater] = useState(1)
    const [grass, setGrass] = useState(1)
    const [electric, setElectric] = useState(1)
    const [ice, setIce] = useState(1)
    const [fighting, setFighting] = useState(1)
    const [poison, setPoison] = useState(1)
    const [ground, setGround] = useState(1)
    const [flying, setFlying] = useState(1)
    const [psychic, setPsychic] = useState(1)
    const [bug, setBug] = useState(1)
    const [rock, setRock] = useState(1)
    const [ghost, setGhost] = useState(1)
    const [dragon, setDragon] = useState(1)
    const [dark, setDark] = useState(1)
    const [steel, setSteel] = useState(1)
    const [fairy, setFairy] = useState(1)

    const applyWeakness = () => {
        if (primary || secondary === 'normal') {
            //weak to:
            setFighting(fighting * 2)
            //resitant to:
            setRock(rock / 2)
            setSteel(steel / 2)
            //no damage from
            setGhost(0)
        }
        if (primary || secondary === 'fire') {
            //weak to:
            setGround(ground * 2)
            setWater(water * 2)
            setRock(rock * 2)
            //resitant to:
            setBug(bug / 2)
            setSteel(steel / 2)
            setFire(fire / 2)
            setGrass(grass / 2)
            setFairy(fairy / 2)
            setIce(ice / 2)
        }
        if (primary || secondary === 'water') {
            //weak to:
            setElectric(electric * 2)
            setGrass(grass * 2)
            //resitant to:
            setFire(fire / 2)
            setWater(water / 2)
            setSteel(steel / 2)
            setIce(ice / 2)

        }
        if (primary || secondary === 'grass') {
            //weak to:
            setFire(fire * 2)
            setBug(bug * 2)
            setFlying(flying * 2)
            setIce(ice * 2)
            setPoison(poison * 2)
            //resitant to:
            setGround(ground / 2)
            setElectric(electric / 2)
            setGrass(grass / 2)
            setWater(water / 2)

        }
        if (primary || secondary === 'electric') {
            //weak to:
            setGround(ground * 2)
            //resitant to:
            setFlying(flying / 2)
            setSteel(steel / 2)
            setElectric(electric /2)
        }
        if (primary || secondary === 'ice') {
            //weak to:
            setFire(fire * 2)
            setFighting(fighting * 2)
            setRock(rock * 2)
            setSteel(steel * 2)
            //resitant to:
            setIce(ice / 2)
        }
        if (primary || secondary === 'fighthing') {
            //weak to:
            setNormal(normal * 2)
            //no damage from
            setGhost(0)
        }
        if (primary || secondary === 'posion') {
            //weak to:
            setGround(ground * 2)
            setPsychic(psychic * 2)
            //resitant to:
            setPoison(poison / 2)
            setFighting(fighting / 2)
            setBug(bug / 2)
            setGrass(grass /2)
            setFairy(fairy / 2)
        }
        if (primary || secondary === 'ground') {
            //weak to:
            setWater(water * 2)
            setGrass(grass * 2)
            setIce(ice * 2)
            //resitant to:
            setPoison(poison / 2)
            setRock(rock / 2)
            //no damage from
            setElectric(0)
        }
        if (primary || secondary === 'flying') {
            //weak to:
            setRock(rock * 2)
            setElectric(electric * 2)
            setIce(ice * 2)
            //resitant to:
            setFighting(fighting / 2)
            setBug(bug / 2)
            setGrass(grass / 2)
            //no damage from
            setGround(0)
        }
        if (primary || secondary === 'psychic') {
            //weak to:
            setGhost(ghost * 2)
            setBug(bug * 2)
            setDark(dark * 2)
            //resitant to:
            setFighting(fighting / 2)
            setPsychic(psychic / 2)
        }
        if (primary || secondary === 'bug') {
            //weak to:
            setFlying(flying * 2)
            setFire(fire * 2)
            setRock(rock * 2)
            //resitant to:
            setFighting(fighting / 2)
            setGrass(grass / 2)
            setGround(ground / 2)
        }
        if (primary || secondary === 'rock') {
            //weak to:
            setFighting(fighting * 2)
            setGround(ground * 2)
            setSteel(steel * 2)
            setWater(water * 2)
            setGrass(grass * 2)
            //resitant to:
            setNormal(normal / 2)
            setFlying(flying / 2)
            setPoison(poison / 2)
            setFire(fire / 2)
        }
        if (primary || secondary === 'ghost') {
            //weak to:
            setGhost(ghost * 2)
            setDark(dark * 2)
            //resitant to:
            setPoison(poison / 2)
            setBug(bug / 2)
            //no damage from
            setNormal(0)
            setFighting(0)
        }
        if (primary || secondary === 'dragon') {
            //weak to:
            setIce(ice * 2)
            setDragon(dragon * 2)
            setFairy(fairy * 2)
            //resitant to:
            setFire(fire / 2)
            setWater(water / 2)
            setGrass(grass / 2)
            setElectric(electric / 2)
        }
        if (primary || secondary === 'dark') {
            //weak to:
            setFighting(fighting * 2)
            setFairy(fairy * 2)
            setBug(bug * 2)
            //resitant to:
            setGhost(ghost / 2)
            setDark(dark / 2)
            //no damage from
            setPsychic(0)
        }
        if (primary || secondary === 'steel') {
            //weak to:
            setFighting(fighting * 2)
            setGround(ground * 2)
            setFire(fire * 2)
            //resitant to:
            setNormal(normal / 2)
            setFlying(flying / 2)
            setRock(rock / 2)
            setBug(bug / 2)
            setSteel(steel / 2)
            setGrass(grass / 2)
            setPsychic(psychic / 2)
            setIce(ice / 2)
            setDragon(dragon / 2)
            setFairy(fairy / 2)
            //no damage from
            setPoison(0)
        }
        if (primary || secondary === 'fairy') {
            //weak to:
            setPoison(poison * 2)
            setSteel(steel * 2)
            //resitant to:
            setFighting(fighting / 2)
            setBug(bug / 2)
            setDark(dark / 2)
            //no damage from
            setDragon(0)
        }
    }
    
    useEffect(() => {
        applyWeakness()
        console.log(normal)
        console.log(fire)
        console.log(water)
        console.log(grass)
        console.log(electric)
        console.log(steel)
        console.log(ghost)
        console.log(ice)
        console.log(rock)
        console.log(ground)
        console.log(fighting)

    }, [])

  return (
    <>
        <TypeTable
            normal={normal}
            fire={fire}
            water={water}
            grass={grass}
            electric={electric}
            ice={ice}
            fighting={fighting}
            poison={poison}
            ground={ground}
            flying={flying}
            psychic={psychic}
            bug={bug}
            rock={rock}
            ghost={ghost}
            dragon={dragon}
            dark={dark}
            steel={steel}
            fairy={fairy}
        />
    </>
  )
}

export default TypeChart
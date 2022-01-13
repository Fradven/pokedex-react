
/**
 * give the <p> for each type a different class base on their type
 * @param type string
 * @returns type name as string
 */
export const switchType = (type: string) => {
    let color: string | undefined;

    switch(type) {
        case "normal":
            color = "normal";
            break;
        case "fighting":
            color = "fighting";
            break;
        case "flying":
            color = "flying";
            break;
        case "poison":
            color = "poison";
            break;
        case "ground":
            color = "ground";
            break;
        case "rock":
            color = "rock";
            break;
        case "ghost":
            color = "ghost";
            break;
        case "steel":
            color = "steel";
            break;
        case "fire":
            color = "fire";
            break;
        case "water":
            color = "water";
            break;
        case "grass":
            color = "grass";
            break;
        case "electric":
            color = "electric";
            break;
        case "psychic":
            color = "psychic";
            break;
        case "ice":
            color = "ice";
            break;
        case "dragon":
            color = "dragon";
            break;
        case "dark":
            color = "dark";
            break;
        case "fairy":
            color = "fairy";
            break;
        case "unknow":
            color = "unknow";
            break;
        case "shadow":
            color = "shadow";
            break;
        case "bug":
            color = "bug";
            break;
    }

    return color
    
}
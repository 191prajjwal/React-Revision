export function increment(){
    return {
        type:"INCREMENT"
    }
}

export function decrement(){
    return{
        type:"DECREMENT"
    }
}

export const setBgColor= (color)=>{
    return {
        type:"SET_BG_COLOR",
        payload:color
    }
}

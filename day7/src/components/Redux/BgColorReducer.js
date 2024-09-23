const initialBgColor={
    backgroundColor:"cornflowerblue"
}
const bgColorReducer=(state=initialBgColor,action)=>{
    switch(action.type)
    {
        case "SET_BG_COLOR"
        : return {
        backgroundColor:action.payload
        }
        default
        :return state
    }

}
export default bgColorReducer
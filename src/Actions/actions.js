import $ from "jquery"

export const fetchData = ()=>(dispatch)=>{
    $.get("./json.json",function(data){
        dispatch({"type":"FETCHDATA","data":data});
    })
}

export const showparkdetail = (Item)=>{
    return {"type":"SHOWDETAIL","Item":Item}
}
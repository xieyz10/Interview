let getInitialData = ()=>{
    return {
        "current":{
            "Name": "Acadia",
            "Image": "https://upload.wikimedia.org/wikipedia/commons/9/93/Bass_Harbor_Head_Light_Station_2016.jpg",
            "Thumbnail": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bass_Harbor_Head_Light_Station_2016.jpg/200px-Bass_Harbor_Head_Light_Station_2016.jpg",
            "Location": "Maine",
            "Established": "February 26, 1919",
            "Area": "49,075.26 acres (198.6聽km2)",
            "Recreation visitors": "3,537,575",
            "Description": "Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats."
        },
        "data":[]
    }
};

export default (state = getInitialData(),action) => {
    switch(action.type){
        case "FETCHDATA":
            return{
                ...state,
                "data":action.data
            }
        case "SHOWDETAIL":
            return{
                ...state,
                "current":{
                    "Name":action.Item.Name,
                    "Image":action.Item.Image,
                    "Thumbnail": action.Item.Thumbnail,
                    "Location":action.Item.Location,
                    "Established":action.Item.Established,
                    "Area":action.Item.Area,
                    "Recreation visitors":action.Item["Recreation visitors"],
                    "Description":action.Item.Description
                }
            }
    }
    return state;
}
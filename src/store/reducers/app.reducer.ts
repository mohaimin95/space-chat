const initialState = {
    contacts:[
        {
            username:"mohaimin95",
            status:"online",
            count:1
        },
        
        {
            username:"fawazn203",
            status:"online",
            count:1
        },
        {
            username:"nasar23",
            status:"offline",
            count:1
        },
        {
            username:"hanima74",
            status:"offline",
            count:0
        }
    ],
    groups:[
        {
            groupName:"Madukkur Members",
            count:"23"
        },
        
        {
            groupName:"I.T Group",
            count:"1"
        },
        {
            groupName:"Clan of Zibtek",
            count:"0"
        },

    ],
}
const appReducer = (state=initialState,action:any) =>{
    switch(action.type) {
        case 'ON_NEW_CONTACT':{
            return {
                ...state,
                contacts:[...state.contacts,action['contact']]
            }
        };break;
        default:{
            return {...state}
        };break;
    }
}

export default appReducer;
import * as ActionType from "./../contants/ActionType"
export const onSave = (user) =>{
    return{
        type : ActionType.ON_SAVE ,
        user
    }
};

export const deleteUser = (user) =>{
    return {
        type: ActionType.DELETE,
       // user : user
       user
    }
}

export const editUser = user =>{
    return {
        type: ActionType.EDIT_USER,
        user
    }
}

export const onFilter = keyword =>{
    return {
        type: ActionType.FILTER,
        keyword
    }
}

////liftingstateReducer

export const them_SP = sanphamchon =>{
    return {
        type:ActionType.THEM_SP,
        sanphamchon
    }
}
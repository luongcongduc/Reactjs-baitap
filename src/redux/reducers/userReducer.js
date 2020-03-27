import * as ActionType from "./../contants/ActionType";
let inittialState = {
    
          userList: [
            {
              id: 1,
              name: "Dinh Phuc Nguyen",
              username: "dpnguyen",
              email: "dpnguyen@gmail.com",
              phoneNumber: "1123123213",
              type: "VIP"
            },
            {
              id: 2,
              name: "BA BI",
              username: "nguyendp",
              email: "nguyendp@gmail.com",
              phoneNumber: "1123123213",
              type: "VIP"
            }
          ],
          keyword: "",
          userEdit : null
        };
      


const userReducer = (state = inittialState, action) =>{
    //Nếu như action lấy danh sách => trả state về component
    // nếu như action là delete => trả state về component
    // nếu edit action => trả state về component
    switch (action.type){
        case ActionType.DELETE:
            console.log(action);
            /**
             * 0. Tìm Vị trí
             */
            let index = state.userList.findIndex(item => item.id === action.user.id);
            if(index !== -1){
                let userList = [...state.userList];
                userList.splice(index, 1);
                state.userList = userList;
            }

            return {...state};
            case ActionType.FILTER :
              console.log(action);
              state.keyword = action.keyword;
              return {...state};

              case ActionType.ON_SAVE :
                if(action.user.id){
                  //Update
                  let userList = [...state.userList];
                  let index = state.userList.findIndex(item => item.id === action.user.id);
                  if(index !== -1){
                    userList[index] = action.user;
                  }
                  state.userList = userList;
                  
                }else{
                  //ADD
                  console.log(action);
                  action.user.id = Math.random();
                let userList = [...state.userList, action.user];
                state.userList = userList;
                // Cách viet khac
                  // let user = {...action.user};
                  // user.id = Math.random();
                  // state.userList = [...state.userList, user]
                  return {...state};
                }
                

                case ActionType.EDIT_USER :
                console.log(action);
                state.userEdit = action.user;
                return {...state};

                
        default : 
            return {...state};
    }
} 



export default userReducer
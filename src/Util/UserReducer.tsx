import { createSlice} from "@reduxjs/toolkit"
import { userList } from "./Data"

const userSlice = createSlice({
    name: "users",
    initialState:{
        users: userList,
        allUsers: userList,
        cohortCount: userList.length,
      },
    
    reducers:{
        addUser: (state, action) => {
             state.users.push(action.payload)
             state.allUsers.push(action.payload);
             state.cohortCount += 1;
            console.log("The action",action)
        },
        searchUser: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.users = state.allUsers.filter(
              (user) =>
                user.cohortName.toLowerCase().includes(searchTerm) ||
                user.program.toLowerCase().includes(searchTerm)
            );
          },
        
    }
})
export const {addUser,searchUser} = userSlice.actions
export default userSlice.reducer;


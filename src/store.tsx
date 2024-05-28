import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Util/UserReducer';

const store = configureStore({
    reducer: {
      users: UserReducer
    }
  });
  
  
  export type RootState = ReturnType<typeof store.getState>;
  
  export default store;
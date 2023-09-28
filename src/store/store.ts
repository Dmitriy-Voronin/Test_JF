import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import userReduser from "./reducers/userReduser";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReduser
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

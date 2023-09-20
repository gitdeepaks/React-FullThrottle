# Redux ToolKit Steps

- Start with creating the store in that we need to import `configureStore` from `@reduxjs/toolkit` and then we need to import the reducer from the slice that we are going to create.
- Create a slice using `createSlice` from `@reduxjs/toolkit` and then we need name, initialState, reducers .

- In the reducers we need to create the actions and state will be updated based on the action.

- Then we need to export the reducer from the slice and then we need to export the actions from the slice.

- Then we need to import the actions in the component and then we need to dispatch the actions.

- Then we need to import the useSelector from react-redux and then we need to use the useSelector to get the state from the store.

- Then we need to import the useDispatch from react-redux and then we need to use the useDispatch to dispatch the actions.

- Then we need to import the Provider from react-redux and then we need to wrap the App component with the Provider and then we need to pass the store as a prop to the Provider.

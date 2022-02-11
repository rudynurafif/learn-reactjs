const initialState = {
  product: 'Poco X3 Pro'
}

const productReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}

export default productReducer
// function yang mereturn sebuah object

export const add = (title) => {
  return {
    type: 'ADD', // properi wajib
    payload: title // data yang akan dikirim ke reducer
  }
}

export const del = (id) => {
  return {
    type: 'DEL',
    payload: id
  }
}
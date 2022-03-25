const posts = [
  {
    title: "Post one",
    body: "This is post one"
  },
  {
    title: "Post two",
    body: "This is post two"
  }
]

const createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if(!error) {
        resolve()
      }else{
        reject()
      }
    }, 2000)
  })
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post)
    })
  }, 1000)
}

const newPost = {
  title: "Post three",
  body: "This is post three"
}

const init = async() => {
  await createPost(newPost)
  getPosts()
}

init()
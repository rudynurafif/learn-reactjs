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

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post)
    callback() // dijalankan kedua
  }, 2000) // 2 detik
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post)
    })
  }, 1000) // 1 detik
}

const newPost = {
  title: "Post three",
  body: "This is post three"
}

createPost(newPost, getPosts)
getPosts() // dijalankan pertama

// OUTPUT
// { title: 'Post one', body: 'This is post one' }    
// { title: 'Post two', body: 'This is post two' }    
// { title: 'Post one', body: 'This is post one' }    
// { title: 'Post two', body: 'This is post two' }    
// { title: 'Post three', body: 'This is post three' }
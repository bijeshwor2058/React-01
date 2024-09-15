
const Content = () => {
  return(
    <div>
      <h1>Learn Web Development</h1>
      <div>
      <p>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all the they need todtart coding websites</p>
      </div>

      <div>
        <p> The aim if this area of MDN is not to take from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should be able to start making your way, learning from <a href="https://developer.mozilla.org/en-US/docs/Glossary/REST">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot previous knowledge.</p>
      </div>

      <div>
        <p>If you are a complete beginner, web development can be challenging -- we will hold your hand provide enough detail for you to feel comfortable and learn the topics proerly. You Should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbiyist, or someone who just wants to understand more about how web technologies work.</p>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Content />,
  document.getElementById('main')
)

import React from 'react'


// props 에 전달되는 인자가 많을경우, ES6의 구조체 분해해서 사용해도 됨
function Food({ fav }) {
  return <h1>I like {fav}</h1>
}


// function Food(props) {
//   // console.log(props);
//   return <h3> I love {props.fav} </h3>;
// }

// App component
function App() {
  // return <div className="App" />;
  // App component 는 HTML 을 반
  return <div>
    <h1> Hello </h1>
    {/*<Food fav="kimchi" something={true} papapa={['hello', 1,2,3,4,true]}/>*/}
    <Food fav={"kimchi"} />
    <Food fav={"ramen"} />
    <Food fav={"samgiopsal"} />
    <Food fav={"chukumi"} />
  </div>;
}

export default App; // export 를 하면 다른 파일에서 Potato 컴포넌트를 사용할 수 있음 , Go 랑 비슷하네?

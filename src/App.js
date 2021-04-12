import React from 'react'
import PropTypes from 'prop-types'

// props 에 전달되는 인자가 많을경우, ES6의 구조체 분해해서 사용해도 됨
// function Food({ fav }) {
//   return <h1>I like {fav}</h1>
// }


// function Food(props) {
//   // console.log(props);
//   return <h3> I love {props.fav} </h3>;
// }

// App component
// function App() {
//   // return <div className="App" />;
//   // App component 는 HTML 을 반
//   return <div>
//     <h1> Hello </h1>
//     {/*<Food fav="kimchi" something={true} papapa={['hello', 1,2,3,4,true]}/>*/}
//     <Food fav={"kimchi"} />
//     <Food fav={"ramen"} />
//     <Food fav={"samgiopsal"} />
//     <Food fav={"chukumi"} />
//   </div>;
// }


// 2021.04.12
const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 5, // prop-types packages 를 설치하여, 컴포넌트가 전달받은 Props 가 정말 내가 원하는 값인지 확인해줌
    },
]; // 서버에서 넘어온 데이터를 저장할 수 있는 배열

// React 의 component list 는 유일한 값을 가져야함
function Food({name, picture, rating}) {
  return (
      <div>
        <h2> I Like {name} </h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
      </div>
  );
}

// console 창에서 warning 문구가 안뜨는데?
Food.propType = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
}

function App(){
  return (
      <div>
        {foodILike.map(dish => (
            <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))}
      </div>
  );
}


// function App(){
//     console.log(foodILike.map(renderFood))
//     return (
//         <div>
//             {foodILike.map(renderFood)}
//         </div>
//     );
// }
//
// function renderFood(dish) {
//     return <Food name={dish.name} picture={dish.image} />;
// }


// map 함수는 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모와서 배열로 반환해줌

export default App; // export 를 하면 다른 파일에서 Potato 컴포넌트를 사용할 수 있음 , Go 랑 비슷하네?

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

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
// const foodILike = [
//     {
//         id: 1,
//         name: "Kimchi",
//         image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//         rating: 5, // prop-types packages 를 설치하여, 컴포넌트가 전달받은 Props 가 정말 내가 원하는 값인지 확인해줌
//     },
// ]; // 서버에서 넘어온 데이터를 저장할 수 있는 배열
//
// // React 의 component list 는 유일한 값을 가져야함
// function Food({name, picture, rating}) {
//   return (
//       <div>
//         <h2> I Like {name} </h2>
//         <h4>{rating}/5.0</h4>
//         <img src={picture} alt={name} />
//       </div>
//   );
// }
//
// // console 창에서 warning 문구가 안뜨는데?
// Food.propType = {
//     name: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     rating: PropTypes.number,
// }
//
// function App(){
//   return (
//       <div>
//         {foodILike.map(dish => (
//             <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
//         ))}
//       </div>
//   );
// }
//
//
// // function App(){
// //     console.log(foodILike.map(renderFood))
// //     return (
// //         <div>
// //             {foodILike.map(renderFood)}
// //         </div>
// //     );
// // }
// //
// // function renderFood(dish) {
// //     return <Food name={dish.name} picture={dish.image} />;
// // }
//
//
// // map 함수는 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모와서 배열로 반환해줌
//
// export default App; // export 를 하면 다른 파일에서 Potato 컴포넌트를 사용할 수 있음 , Go 랑 비슷하네?

// 2021.04.13. clone codeing chap05. state 와 클래스형 컴포넌트

// state 는 동적 데이터를 다룰때 사용 -> 동적데이터? 변경도리 가능성이 있는 데이

// App 이라는 클래스가 Component 라는 클래스를 상속받음
// 클래스형 컴포넌트가 되려면 Component 클래스를 반드시 상속받아야함
// class App extends React.Component {
//     // react 는 state 를 직접 변경하지 못함 -> why? state 가 변경되면, render 함수를 다시 실행하여 변경된 state 를 화면에 출력함. 그런데 state 를 직접변경하는 경우는 render 함수를 다시 실행하지 않음
//     state = {
//         count: 0,
//     };
//
//     add = () => {
//         // react 에서 setState 함수를 사용해서 state 를 변경하면, 자동으로 render 함수가 호출
//       this.setState(current =>(
//           {count: current.count + 1})
//       );
//     };
//
//     minus = () => {
//         this.setState(current =>(
//             {count: current.count - 1})
//         );
//     };
//
//     // 생명주기: 가장처음
//     constructor(props) {
//         super(props);
//         console.log("hello");
//     }

        // render() 함수가 호출되면, 실행되는 함수
//     componentDidMount() {
//         console.log('component rendered');
//     }
//
//     // 생명주기: 화면이 업데이트 되는 시점
//     componentDidUpdate() {
//         console.log("I just updated!")
//     }
//     // 생명주기: 컴포넌트가 화면을 떠날 때 실행 , 이벤트 리스너를 제거할때 많이 사용
//     componentWillUnmount() {
//         console.log("Goodbye, cruel world!")
//     }
//
//     // Component 는 class 이기 때문에 JSX 로 반환하려면, render 함수를 사용
//     render() {
//         console.log("I'm rendering");
//         return (
//             <div>
//             <h1>The number is :{this.state.count}</h1>
//             <button onClick={this.add}>Add</button>
//             <button onClick={this.minus}>Minus</button>
//         </div>
//         );
//     }
// }

class App extends React.Component {
    // state 는 항상 소문자
    state = {
        isLoading: true,
        movies: [],
    }

    // javascripts 에게 getMovies() 함수는 시간이 필요해 라고 알려줘야함 -> async 키워드
    getMovies = async () => {
        // 실제 시간이 필요한 대상앞에는 await 를 붙혀줌
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    }

    componentDidMount() {
        // 영화 데이터 로딩!
        this.getMovies()
    }

        // setTimeout(
        //     () => {
        //         this.setState({isLoading: false});
        //         }, 6000);
        //     }

    render() {
        const { isLoading } = this.state;
        return <div>{ isLoading ? 'Loading ...' : "we are ready"} </div>;
    }
}

export default App;

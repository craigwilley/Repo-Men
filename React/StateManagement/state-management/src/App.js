import React from "react";

// import MealsProvider from "./providers/MealsProvider";
// import MealsList from "./components/MealsList";
// import Counter from "./components/Counter";
// import ReactPlayer from "react-player/youtube";
// import React from "react";
//
// function App() {
//   return (
//       <div>
//
//
//           <MyVideo />
//           </div>
//           );
//       };
//
//           const MyVideo = () => {
//           return (
//           <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
//           );
//       };


        {/*<MealsProvider>*/}
        {/*    <MealsList />*/}
        {/*    <Counter />*/}
        {/*</MealsProvider>*/}
//       </div>
//   );
// }

// export default App;



function App() {

    const bird1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    const bird2 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );

    function toggle1() {
        if (bird1.paused) {
            bird1.play();
        } else {
            bird1.pause();
        }
    };

    function toggle2() {
        if (bird2.paused) {
            bird2.play();
        } else {
            bird2.pause();
        }
    };

    return (
        <div>
            <button onClick={toggle1}>Caspian Tern 1</button>
            <button onClick={toggle2}>Caspian Tern 2</button>
        </div>
    );
}

export default App;
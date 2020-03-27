import React, { useState, useEffect } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);

  // Giống componentDidMount và componentDidUpdate:
  useEffect(() => {
    // Cập nhật tiêu đề trang web sử dụng API trình duyệt
    document.title = `Bạn đã bấm ${count} lần`;
  });

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm vào tôi
      </button>
    </div>
  );

}
export default EffectHook;


// su dung state
// import React from 'react';

// class Example extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   setCount = () => {
//     const { count } = this.state;
//     this.setState({
//       count: count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={this.setCount}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
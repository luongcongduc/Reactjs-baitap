import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Baitap1 from './components/bai_tap1';
// import Baitap2 from './components/bai_tap2';
// import RenderingElements from './components/rendering-elements';
// import HandlingEvent from './handling-event';
// import ExampleHandlingEvent from './handling-event/example-handling-event';
import State from './state/index';
import PhimVonglap from './Phim_vonglapfor/index'
import BaiTapCar from './Baitap_car/bai-tap-car.js';
// import BaitapCar from './baitap_car_lam lai/baitapcar'
import ListKeys from './list-keys/index.js';
import Props from './props';
import LiftingStateUp from './lifting-state-up';

// import LiftingStateUpCart from './lifting-state-up-cart';
import Index from './liftting-up-state-on  tap/index'

import Home from './user-managerment-layout/Home';
import HomeRedux from './user-managerment-layout-Redux/Home'
 import Lifecycle from './lifecycle'
 import IndexList from './Hien-Thi-Tung-phantu/IndexList'
//  import FormValidation from './form-validation/form-validation'
//  import VePhim from './Phim/vephim'
import ListItem from './baitap_Hienthi-tungphantu/List_item';
import CheckWinner from './Cờ-Caro/checkWinner';
import Hook from './React-Hook/HOOK'
function App() {
//   return (
//   <div>
//     <div> hello</div>  .js
//     <Baitap1 />
//   </div>
// /** nhiu hon 1 hag fai co dau ngoac tròn */
//     );
// }
return ( 
  <div>
    {/* <Baitap2 /> */}
    {/* <RenderingElements />
    <hr />
    <HandlingEvent />

    <hr />
    <ExampleHandlingEvent />
    <br />

    <hr /> */}
    <State />

    <hr />
    <PhimVonglap />
    <hr />
    <BaiTapCar />
    <hr />
    {/* <BaitapCar /> */}

    <hr />
    <ListKeys />

    <hr />
    <Props />

    <hr />
    < LiftingStateUp />

    <hr />
    {/* <LiftingStateUpCart /> */}

<hr />
    <Index />
    <hr />
    <Home />

    <hr />
    < HomeRedux />
    <hr />
    <Lifecycle />
    <hr />
    {/* <FormValidation /> */}
    <hr />
    {/* <VePhim /> */}
    <IndexList />
    <hr />
    <ListItem />
    <hr />
    <CheckWinner />
    <hr />
    <Hook />
  </div>
)
}

export default App;

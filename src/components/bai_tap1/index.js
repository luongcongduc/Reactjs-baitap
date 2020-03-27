import React from 'react';
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from "./footer";

export default function Baitap1(){ //export default la tao 1 cai
    // return (<div>Baitap 1</div>); // 1 dong co the bo dau ngoac tròn, 2 cai tro len thi dùng
    return (<div>
        <Header />
        <div className="contents">
        <Content />
        <Sidebar />
        </div>
        
        <Footer />
    </div>

    );
}
import React,{ Component} from 'react';

export default class ListKeys extends Component{

    constructor(props){
        super(props);
        this.state = {
            mangSP : [
                { id: 1, tenSP: "Iphone", gia: 1231 },
                { id: 2, tenSP: "SamSung", gia: 1231},
                { id: 3, tenSP: "HTC", gia: 1231}
            ]
        };
    }

    renderHTML = () => {
    //    kIEN THỨC boc tách trong ES6
        let { mangSP } = this.state;
    //    return this.state.mangSP.map((item, index) => {
        return mangSP.map((item, index) => {
            return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.tenSP}</td>
                <td>{item.gia}</td>
            </tr>
            );
        });
    }

    render(){
        return (
            <div>
                <h3 className="title">listkeys</h3>
                <table>
                    <thead>
                    <tr>
                        {/* <th> la tieu de */}
                        <th>id</th> 
                        <th>ten SPph</th>
                        <th>gia</th>
                    </tr>
                    </thead>
                   
                    <tbody>
                        {this.renderHTML()}
                    </tbody>
                </table>
            </div>
        )
    }
}
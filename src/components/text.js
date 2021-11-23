function Txt(props) {
    return (<p>I am {props.data}</p>)
}
export default Txt;

////same in class component:

// import { Component } from "react";
// class Txt extends Component {
//     render() {
//         return (<p>I am {this.props.data}</p>)
//     }
// }
// export default Txt;
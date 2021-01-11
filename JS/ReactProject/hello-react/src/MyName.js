import React, {Component} from 'react';

/**
class MyName extends Component{
    static defaultProps ={
        name: '기본이름'
    }

    render(){
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b>
            </div>

        );
    }
}
// 위의 선언과 동일함
// MyName.defaultProps={
//     name:'기본이름'
// };
 */

// 함수형 컴포넌트
const MyName = ({name})=>{
    return (
        <div>
            안녕하세요! 제 이름은 <b>{this.props.name}</b>
        </div>

    );
};


export default MyName;
import React, { Component } from 'react';

const withSplitting = getComponent =>{
    // getComponent : ()=>import('./SplitMe')의 형태로 함수가 전달되야 한다.
    class WithSplitting extends Component{
        static Splitted=null; // 기본값은 null 이지만
        static preload(){
            // preload가 호출되면 위 static SPlitted가 설정되고
            getComponent().then(()=>{
                WithSplitting.Splitted = Splitted;
            });
        }

        state ={
            //Splitted: null,
            Splitted: WithSplitting.Splitted // 컴포넌트가 생성되는 시점에서 static Splitted 를 사용하게 되므로 null 이나 컴포넌트를 사용하게됨
        };

        constructor(props){
            super(props);
            getComponent().then(({default: Splitted})=>{
                this.setState({
                    Splitted
                });
            });
        }
        render(){
            const { Splitted } = this.state;
            if(!Splitted){
                return null;
            }
            return <Splitted {...this.props}/>;
        }
    }
    return WithSplitting;
};

export default withSplitting;

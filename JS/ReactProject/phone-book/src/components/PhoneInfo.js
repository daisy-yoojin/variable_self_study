// 각 전화번호 정보를 보여주는 컴포넌트
import React, {Component} from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
      info: {
        name: '이름',
        phone: '010-0000-0000',
        id: 0
      }
    }
    state = {
        // editing 값에 따라 text거나 input형태를 제공
        editing: false,
        //input값은 유동적이므로 필드를 위한 값 설정
        name: '',
        phone: '',
    }

    handleRemove = ()=>{
        //삭제버튼 클릭시 onRemove에 id 넣어서 호출
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    // editing 값을 반전시키는 함수입니다
    // true -> false, false -> true
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({ editing: !editing });
    }
    
    // input 에서 onChange 이벤트가 발생 될 때
    // 호출되는 함수입니다
    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }

    componentDidUpdate(prevProps, prevState){
        // editing 값이 바뀔때마다 처리할 로직
        // 수정 click, 기존의 값이 input안에 나타나고
        // 수정 적용시, input의 값 부모에 전달
        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){
            // editing 값이 false -> true 로 전환 될 때
            // info 의 값을 state 에 넣어준다
            this.setState({
                name: info.name,
                phone: info.phone
            });
        }
        if(prevState.editing && !this.state.editing){
            //editing 값이 true-> false로 전환 될 때
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }
    }
    
    render() {
      const style = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
      };
      const {editing} = this.state;

      if(editing){ // 수정 모드
        return(
            <div style={style}>
            <div>
                <input 
                    value = {this.state.name} 
                    name = "name"
                    placeholder="아름을 입력하세요"
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <input 
                    value = {this.state.phone} 
                    name = "phone"
                    placeholder="전화번호를 입력하세요"
                    onChange={this.handleChange}
                />
            </div>
            <button onClick={this.handleToggleEdit}>적용</button>
            <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
      }
      // 일반 상태
      const {
        name, phone
      } = this.props.info;
      return (
        <div style={style}>
          <div><b>{name}</b></div>
          <div>{phone}</div>
          <button onClick={this.handleToggleEdit}>수정</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }
  }

export default PhoneInfo;
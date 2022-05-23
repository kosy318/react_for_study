import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{

  // id는 참고용이라 굳이 state에 넣어줄 필요 없다. rendering 용이 아님
  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    console.log(data);

    // information 배열에 받아온 데이터 넣기
    const {information} = this.state;
    this.setState({
      // 기존의 배열은 수정하지 않고 새로운 배열을 만들어서 그 배열에 데이터를 집어넣어서 그 배열을 기존의 배열 자리에 넣어줌
      information: information.concat({
        // name: data.name,
        // phone: data.phone,
        ...data,
        id: this.id++
      })
      // 비어있는 객체 {}에 data와 id를 집어넣는다는 의미
      // information: information.concat(Object.assign({}, data, {
      //   id: this.id++
      // }))
    })
  }

  // 제거 기능 구현
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  // 수정 기능 구현
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          // info의 id값고 parameter의 id값이 같으면
          if(info.id === id){
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render(){
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {JSON.stringify(this.state.information)}

        {/* PhoneInfoList한테 information, handleRemove, handleUpdatae 전달 */}
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./ScrollBox.css";

class ScrollBox extends Component {
    id = 2;

    state = {
        listNums: [1],
    };

    handleInsert = () => {
        this.setState({
            listNums: [this.id++, ...this.state.listNums],
        });
        console.log(this.state.listNums);
    };

    // 새 데이터가 상단에 추가되어도 스크롤바를 유지하기 위함
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // DOM 업데이트가 일어나기 직전의 시점
        // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
        // scrollTop 은 이 기능이 크롬에 이미 구현이 되어있는데, 이미 구현이 되어있다면 처리하지 않도록 하기 위함

        // listNums의 현재의 상태와 이전의 상태가 다를때
        if (prevState.listNums !== this.state.listNums) {
            // className 이 "list"인 component의 scrollTop과 scrollHeight 값을 읽어와서
            const { scrollTop, scrollHeight } = this.list;

            // 여기서 반환 하는 값은 componentDidUpdate 에서 snapshot 값으로 받아올 수 있다
            return { scrollTop, scrollHeight };
        }
    }
    
    // 리스트의 스크롤 위치를 설정함으로써 보고있는것을 계속 유지할 수 있게끔 해줌
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            const { scrollTop } = this.list;
            if (scrollTop !== snapshot.scrollTop) return; // 기능이 이미 구현돼있음

            const diff = this.list.scrollHeight - snapshot.scrollHeight;
            this.list.scrollTop += diff;
        }
    }

    render() {
        const rows = this.state.listNums.map((number) => (
            <div className="row" key={number}>
                {number}
            </div>
        ));

        return (
            <div>
                <div
                    ref={(ref) => {
                        this.list = ref;
                    }}
                    className="list"
                >
                    {rows}
                </div>
                <button onClick={this.handleInsert}>Click Me</button>
            </div>
        );
    }
}

export default ScrollBox;

import React, { Component } from 'react';
import './index.css';

class Info extends Component {
  render() {
    return (
      <div id="info" className="info">
        <span className="sub_tit">About me</span>
        <i>This is Jueun Lee</i>
        <p>
          안녕하세요, 끊임없이 발전하려고 노력하는<br />
          개발자 이주은입니다.<br />
          저는 이커머스 사이트에서 다년간 UI/UX 개발을 하며<br />
          많은 소비자를 상대로 다양한 기술을 터득해 왔습니다.<br />
          누구보다 항상 꼼꼼하고 섬세하게 작업하며<br />
          많은 협업을 토대로 디자이너와 개발자들과 원활한 커뮤니케이션을 합니다.<br />
          이 사이트는 <strong>es6와 리액트로 제작</strong>되었으며,<br />
          최신 기술을 끊임없이 공부하려고 노력하는 제 모습을 담았습니다.<br />
        </p>
      </div>
    );
  }
}

export default Info;

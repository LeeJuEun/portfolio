import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Image, Table, Label } from 'semantic-ui-react'

import RevealOnScroll from '../RevealOnScroll';

import './index.css';

const Category = ({category}) => {
  category = category.toLowerCase();

  const colors = {
    css: "green",
    html: "grey",
    js: "orange"
  };

  if (!colors[category] ) {
    return (<div></div>);
  }

  return (
    <Label color={colors[category]} horizontal className="category-label">
      {category.toUpperCase()}
    </Label>
  );
}


class Work extends Component {
  _renderSkillTable(skills) {
    if (skills.length === 0) {
      return (<div></div>);
    }

    return (
      <Table 
        basic="very"
        celled
        padded
        unstackable
        textAlign="center"
        collapsing={false} 
        size="small"
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell textAlign="left">Keywords</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          {
            skills.map(({
              category = "",
              keywords =[]
            }, i) => (
              <Table.Row key={i}>
                <Table.Cell>
                  <Category category={category} />
                </Table.Cell>
                
                {/* render files */}
                
                {/* render keywords */}
                <Table.Cell textAlign="left">
                  {
                    keywords && keywords
                      .map(
                        ({word, link }, i) => !link 
                          ? (<span key={i}> {word} </span>)
                          : (<a href={link} key={i}> {word} </a>)
                      )
                  }
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    );
  }

  render() {
    const {
      title,
      img,
      viewport,
      iesupport,
      descriptionHTML,
      pc = "",
      mobile = "",
      pcmobile = "",
      skills = []
    } = this.props.work

    
    return (
      <div className="work">
        <RevealOnScroll i={this.props.i} key={this.props.key}>
          <h4>{title}</h4>
          <span className="work_img"><img src={img} /></span>
          <span className="work_desc">
            <ul>
            <li><strong>Viewport</strong><span>{viewport}</span></li>
            <li><strong>IE Support</strong><span>{iesupport}</span></li>
            </ul>
            <p dangerouslySetInnerHTML={{__html:descriptionHTML}} />
            <span className="btn_work_wrap">
              { pc && <Button href={pc}>PC</Button> }
              { mobile && <Button href={mobile}>MOBILE</Button>}
              { pcmobile && <Button href={pcmobile}> </Button>}
            </span>
          </span>
          <span className="work_table">
            { this._renderSkillTable(skills) }
          </span>
        </RevealOnScroll>
      </div>
    )

  }
}

/*
1. App 컴포넌트에서 onScroll 이벤트 리스닝
2. App 컴포넌트의 자식들을 ref 로 가져 오기 
3. App 에서 WorkList.onScroll() 호출하기
4-1. WorkList.onScroll 에서 worklist 의 Top 을 받아서 Work 1번 열기 - top을 받으려면 app에썼던 코드 또 써야해?
4-2. WorkList.onScroll 에서 Work 1번 의 bottom 을 받아서 Work 2번 열기
4-3. WorkList.onScroll 에서 Work 2번 의 bottom 을 받아서 Work 3번 열기
 여는건 css로하믄되 ReactCSSTransitionGroup이런거 쓰면되나 맨위에한거??????그건 웅 css인뎅
 css로 할수는잇는데 계속 그거쓰는게 옳은건가 싶어서 웅냥ㅠㅠ 해볼게유 일단 집가서 해야긋다

    // console.log("home.top", ReactDOM.findDOMNode(this).getBoundingClientRect().top); -> 워크리스트에서 해야되는거지?

3. Worklist 의 각 work 를 차례차례 열기
*/
class WorkList extends Component {
  render() {
    return (
      <div id="worklist" className="worklist">
        <span id="work" className="sub_tit">Portfolio</span>
        {/* 여기에 Ref 추가하기 */}
        {this.props.works && this.props.works.map((work, i) => (
          <Work i={i+1} key={i} work={work} ref={input => this[`work${i}`] = input} />)
        )}
      </div>
    );
  }
}

export default WorkList;

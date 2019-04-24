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

class WorkList extends Component {
  render() {
    return (
      <div id="worklist" className="worklist">
        <span id="work" className="sub_tit">Portfolio</span>
        {this.props.works && this.props.works.map((work, i) => (
          <Work i={i+1} key={i} work={work} ref={input => this[`work${i}`] = input} />)
        )}
      </div>
    );
  }
}

export default WorkList;

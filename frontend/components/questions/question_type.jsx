import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIdx: 0 };
    this.onChangeTab = this.onChangeTab.bind(this);
  }


  onChangeTab(idx) {
    this.setState({ tabIdx: idx });
  }

  render() {

    return (
      <>
        <Headers
          index={this.state.tabIdx}
          onChangeTab={this.onChangeTab}
          tabs={this.props.tabs}></Headers>
        <p>{this.props.tabs[this.state.tabIdx].content}</p>
      </>
    )
  }
}
const Headers = (props) => {
  const headers = props.tabs.map((tab, idx) => {
    const klass = idx === props.index ? 'active' : ""
    return (
      <li
        key={idx}
        className={klass}
        onClick={() => { props.onChangeTab(idx) }}>
        {tab.title}
      </li>
    )
  })
  return (
    <ul className='tabs'>
      {headers}
    </ul>
  )
}
export default Tabs;
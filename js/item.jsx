import React from 'react';
require('./../font-awesome-4.6.3/css/font-awesome.min.css');

export class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <span>
          <input type="checkbox" defaultChecked />
          {this.props.name}
        </span>
        <i className="fa fa-times" aria-hidden="true" id={this.props.id} onClick={this.props.delItem}/>
      </div>
    );
  }
}
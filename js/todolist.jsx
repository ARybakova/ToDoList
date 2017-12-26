import React from 'react';
import { Item } from './item.jsx';
import data from './../items.json';

export class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: data,
      displayedItems: data,
      query: '',
      newItem: ''
    };
  }

  handleSearch(event) {
    let query = event.target.value.toLowerCase();
    let newItems = this.state.items.filter(function(el) {
      let item = el.name.toLowerCase();
      return item.indexOf(query) !== -1;
    });

    this.setState({
      displayedItems: newItems,
      query: event.target.value
    });
  };

  addItem(event) {
    let newItem = this.state.newItem;
    let newId = (this.getLastId()) + 1;
    let newItems = this.state.items;

    if (newItem && confirm('Are you sure you want to add new ToDo item: ' + newItem + '?')) {
      newItems.push({id: newId, name: newItem});
      this.setState({
        items: newItems,
        displayedItems: newItems,
        newItem: '',
        query: ''
      });
    }
    event.preventDefault();
  };

  setNewItem(event) {
    this.setState({
      newItem: event.target.value
    });
  };

  getLastId() {
    let lastId = 0;
    this.state.items.forEach(function(el) {
      if (el.id > lastId) {
        lastId = el.id;
      }
    });
    return lastId;
  };

  delItem(event) {
    if (confirm('Are you sure you want to delete this item?')) {
      let newItems = this.state.items;
      let displayedItems = this.state.displayedItems.filter(function(el) {
        return parseInt(event.target.attributes.id.value) !== el.id;
      });
      newItems.forEach(function(el, index, arr) {
        if (parseInt(event.target.attributes.id.value) === el.id) {
          arr.splice(index,1);
        }
      });
      this.setState({
        items: newItems,
        displayedItems: displayedItems
      });
    }
  };

  render() {
    return (
      <div className="todolist">
        <div className="header">ToDo List</div>
        <input type="text" className="searchfield" placeholder="I'm looking for..." onChange={this.handleSearch.bind(this)} value={this.state.query}/>
        <div className="list">
          {this.state.displayedItems.map((item) =>
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              delItem={this.delItem.bind(this)}
            />
          )}
        </div>
        <form className="subm" onSubmit={this.addItem.bind(this)}>
          <input className="txt" type="text" placeholder="ToDo text" onChange={this.setNewItem.bind(this)} value={this.state.newItem}/>
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
}
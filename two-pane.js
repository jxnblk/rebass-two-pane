
var React = require('react');
var classnames = require('classnames');
var controllable = require('react-controllables');

var TwoPane = React.createClass({displayName: "TwoPane",

  propTypes: {
    items: React.PropTypes.array,
    onSelectedChange: React.PropTypes.func,
    listWidth: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      items: [],
      selected: 0,
      listWidth: 192
    }
  },

  renderListItem: function(item, i) {
    var active = this.props.selected === i;
    return (
      React.createElement(TwoPane.Item, {
        key: 'item-'+i, 
        index: i, 
        item: item, 
        active: active, 
        onSelectedChange: this.props.onSelectedChange}
        )
    )
  },

  render: function() {
    var styles = {
      list: {
        width: 192
      },
      content: {
      }
    };
    var activeItem = this.props.items[this.props.selected];
    return (
      React.createElement("div", {className: "clearfix flex border"}, 
        React.createElement("div", {className: "sm-col border-right", style: styles.list}, 
          React.createElement("ul", {className: "m0 list-reset"}, 
            this.props.items.map(this.renderListItem)
          )
        ), 
        React.createElement("div", {className: "overflow-hidden px2"}, 
          React.createElement("h1", null, activeItem.name), 
          activeItem.content
        )
      )
    )
  }

});

TwoPane.Item = React.createClass({displayName: "Item",

  propTypes: {
    index: React.PropTypes.number,
    onSelectedChange: React.PropTypes.func,
    item: React.PropTypes.object,
    active: React.PropTypes.bool,
  },

  handleClick: function() {
    this.props.onSelectedChange(this.props.index);
  },

  render: function() {
    var i = this.props.index;
    var item = this.props.item;
    return (
      React.createElement("li", {key: 'item-'+i, className: "border-bottom"}, 
        React.createElement("a", {href: '#'+item.name, 
          "data-index": i, 
          onClick: this.handleClick, 
          className: classnames('h4 block button py2 button-transparent',
            { 'white bg-blue': this.props.active })}, 
            item.name
        )
      )
    )
  }

});

module.exports = controllable(TwoPane, ['selected']);


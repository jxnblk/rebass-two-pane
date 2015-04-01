
var React = require('react');
var classnames = require('classnames');
var controllable = require('react-controllables');

var TwoPane = React.createClass({

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
      <TwoPane.Item
        key={'item-'+i}
        index={i}
        item={item}
        active={active}
        onSelectedChange={this.props.onSelectedChange}
        />
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
      <div className="clearfix flex border">
        <div className="sm-col border-right" style={styles.list}>
          <ul className="m0 list-reset">
            {this.props.items.map(this.renderListItem)}
          </ul>
        </div>
        <div className="overflow-hidden px2">
          <h1>{activeItem.name}</h1>
          {activeItem.content}
        </div>
      </div>
    )
  }

});

TwoPane.Item = React.createClass({

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
      <li key={'item-'+i} className="border-bottom">
        <a href={'#'+item.name}
          data-index={i}
          onClick={this.handleClick}
          className={classnames('h4 block button py2 button-transparent',
            { 'white bg-blue': this.props.active })}>
            {item.name}
        </a>
      </li>
    )
  }

});

module.exports = controllable(TwoPane, ['selected']);


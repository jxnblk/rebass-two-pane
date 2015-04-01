
var React = require('react');

var TwoPane = require('../two-pane');

var Root = React.createClass({

  getDefaultProps: function() {
    return {
      items: [
        { name: 'Herro', content: 'Herro Warld' },
        { name: 'Warld', content: 'Hi Hi' },
        { name: 'Oh herro', content: 'Hi Hi' },
        { name: 'Hi hi hi', content: 'Hi Hi' },
        { name: 'Howdy', content: 'Hi Hi' },
        { name: 'Hamburger', content: 'Hi Hi' },
        { name: 'Hotdog', content: 'Hi Hi' },
      ]
    }
  },

  getInitialState: function() {
    return {
      selected: 0,
    }
  },

  handleSelectedChange: function(i) {
    this.setState({ selected: i });
  },

  render: function() {
    return (
      <div className="p3">
        <h1>Rebass TwoPane Demo</h1>
        <h2>
          Selected: {this.state.selected}
        </h2>
        <div className="mb3">
          <TwoPane
            items={this.props.items}
            selected={this.state.selected}
            onSelectedChange={this.handleSelectedChange}
            />
        </div>
        <div>
          <p>Notes:</p>
          <ul>
            <li>Figure out how to handle this.props.children and click events etc. for list items</li>
            <li>Figure out support for this.props.children for content pane</li>
          </ul>
        </div>
      </div>
    )
  }

});

module.exports = Root;


import React from 'react';

export default class Select extends React.Component {
  static defaultProps = {
    selected: ''
  };

  constructor (props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const selected = event.target.value;

    this.props.onChange({id: selected});

    this.setState({
      selected
    });
  }

  render () {
    return (
      <select className="form-control select" value={this.state.selected} onChange={this.handleChange}>
        <option value="">Все авиакомпании</option>
        {this.props.options.map(option => {
          return <option value={option} key={option}>{option}</option>
        })}
      </select>
    );
  }
}

import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class TabSelector extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {
    }
  }

  render() {
    const {value, options, onChange} = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === value
                  ? "selected"
                  : ""
              }`}
              onClick={() => onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const options = [
  {name: "Red", value: "red"},
  {name: "Blue", value: "blue"},
  {name: "Orange", value: "orange"}
];

export class TabSelectorSample extends React.PureComponent {
  state = {
    color: null
  };

  render() {
    return (
      <div>
        Select color:{" "}
        <TabSelector
          options={options}
          value={this.state.color}
          onChange={c => this.setState({color: c})}
        />
      </div>
    );
  }
}

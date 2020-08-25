import React, {PureComponent} from "react"
import PropTypes from "prop-types"


export default class AdvancedTabSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    childrenFunc: PropTypes.func
  }

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {
    },
    childrenFunc: () => {
    }
  }

  render() {
    const {value, options, onChange, childrenFunc} = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === value ? "selected" : ""
              }`}
              onClick={() => onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
        <br/>
        <br/>
        {value && childrenFunc(value)}
      </div>
    )
  }
}

const colors = [
  {name: "Red", value: "red"},
  {name: "Blue", value: "blue"},
  {name: "Orange", value: "orange"}
];

const animals = [
  {name: "Tiger", value: "tiger"},
  {name: "Elephant", value: "elephant"},
  {name: "Cow", value: "cow"}
];

export class AdvancedTabSelectorSample extends PureComponent {
  state = {
    color: null
  };

  render() {
    return (
      <div>
        <h3>Select color: </h3>
        <AdvancedTabSelector
          options={colors}
          value={this.state.color}
          onChange={c => this.setState({color: c})}
        >
          {color => (
            <span
              style={{
                display: "inline-block",
                backgroundColor: color,
                width: "40px",
                height: "40px"
              }}
            />
          )}
        </AdvancedTabSelector>
        <br/>
        <br/>
        <br/>
        <h3>Select animal: </h3>
        <AdvancedTabSelector
          options={animals}
          value={this.state.animal}
          onChange={c => this.setState({animal: c})}
        >
          {animal => (
            <img width="100px" src={require(`../../images/${animal}.png`)} alt=""/>
          )}
        </AdvancedTabSelector>
      </div>
    );
  }
}

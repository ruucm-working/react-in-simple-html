class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  componentDidMount() {
    alert('componentDidMount')
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <span>Say Hello to World : </span>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
      </div>
    )
  }
}
ReactDOM.render(<Greeting />, document.getElementById('root'))

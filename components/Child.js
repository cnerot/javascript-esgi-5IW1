class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};

    }

    onPlusClick() {
        this.setState({value: this.state.value + 1});
    }

    onMinusClick() {
        this.setState({value: this.state.value - 1});
    }

    build() {
        return React.createElement('div', null,
            React.createElement('div', null, `${this.state.value}`),
            React.createElement('button', {onClick: this.onPlusClick.bind(this)}, '+'),
            React.createElement('button', {onClick: this.onMinusClick.bind(this)}, '-')
        );
    }
}
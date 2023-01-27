import {Component} from 'react';
import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {  // Это диначеская вещь которая будет менятся (вводим статичные данные)
			years: 27,
			text: '+++',
			position: ''
		}
		
	}

	nextYear = () => {
		this.setState(state => ({ // с помощью этого метода будет изменение state -> приходит из this.state
			years: state.years + 1
			 
		}));
	}
 
	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;
		const {position, years} = this.state;
		
		return (
			<> 
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname}, 
				age - {years}, 
				position - {position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
				</form>
			</>
		)
	}
}
// onChange и onInput в реакте работают одинаково 
// Fragment -> убирает пустой div

function App() {
	return (
		<div className='App'>
			<WhoAmI name='John' surname='Smith' link='facebook.com' />
			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
		</div>
	);
}

export default App;
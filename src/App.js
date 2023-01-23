import {Component} from 'react';
import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {  // Это диначеская вещь которая будет менятся (вводим статичные данные)
			years: 27,
			text: '+++'
		}
	}

	nextYear = () => {
		this.setState(state => ({ // с помощью этого метода будет изменение state -> приходит из this.state
			years: state.years + 1  // будет years меняться динамически
		}));
	}
/* В this.state можем написать все свойтва, а в this.setState добавим только те свойтва из this.state, 
которые хотим изменить */
	render() {
		const {name, surname, link} = this.props;
		return (
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
				<a href={link}>My profile</a>
			</div>
		)
	}
}

function App() {
	return (
		<div className='App'>
			<WhoAmI name='John' surname='Smith' link='facebook.com' />
			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
		</div>
	);
}

export default App;

// props -> только для чтения
/* вывод:
1) у компонента может быть внутреннее состояние, которое динамически меняется
2) он может быть как у классовых так и функциональных компонентов 
3) state на прямую менять нельзя, только через команду this.setState
4) this.setState -> изменение state это асинронная операция
5) в команде this.setState мы можем менять только те свойства объекта состояния которые нам нужны, остальные 
остануться без изменения
*/ 

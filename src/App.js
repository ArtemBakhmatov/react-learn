import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: this.props.counter // при вызове класса <App counter={0} />
			//counter: 0  // можно прописать значение 0 тут // при вызове класса <App />
		}
	}
	
	incCounter = () => {  // увеличиваем на единицу
		if (this.state.counter < 50) {
			this.setState(state => ({
				counter: state.counter + 1
			}));
		}
	}

	decCounter = () => {   // уменьшаем на единицу
		if (this.state.counter > -50) {
			this.setState(state => ({
				counter: state.counter - 1
			}));
		}
	}

	rndCounter = () => {  // рандомные числа от 50 и до -50
		this.setState({
			counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
		}); // (50 - -50) + -50) -> диапазон от 50 до -50 // toFixed(0) -> округление до целого числа
	}

	resetCounter = () => { // сбросить, тоесть будет ноль
		this.setState({
			counter: this.props.counter // при вызове класса <App counter={0} />
			//counter: 0  // можно прописать значение 0 тут // при вызове класса <App />
		});
	}
	
	render() {
		const {counter} = this.state
		return (
			<div className="app">
			<div className="counter">{counter}</div>
			<div className="controls">
				<button onClick={this.incCounter}>INC</button>
				<button onClick={this.decCounter}>DEC</button>
				<button onClick={this.rndCounter}>RND</button>
				<button onClick={this.resetCounter}>RESET</button>
			</div>
			</div>
		)
	}
}

export default App;
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

// props -> только для чтения
/* вывод:
1) у компонента может быть внутреннее состояние, которое динамически меняется
2) он может быть как у классовых так и функциональных компонентов 
3) state на прямую менять нельзя, только через команду this.setState
4) this.setState -> изменение state это асинронная операция
5) в команде this.setState мы можем менять только те свойства объекта состояния которые нам нужны, остальные 
остануться без изменения
*/ 

import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
	  super(props);
	}
	
	// Используйте только стрелочную форму методов
	// Почему? Подробный ответ будет в следующем уроке
	
	render() {
	  return (
		<div class="app">
		  <div class="counter">10</div>
		  <div class="controls">
			<button>INC</button>
			<button>DEC</button>
			<button>RND</button>
			<button>RESET</button>
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

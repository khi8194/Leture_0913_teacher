//ES5 객체 지향
function Student1(props) {
	this.name = props.name;
	this.age = props.age;
}
//생성자에 자동 생성된 prototype이란 공용 공간에 앞으로 재활용할 함수 등록 (메서드)
Student1.prototype.inform = function () {
	console.log('My Name is ' + this.name + '! ' + 'I am ' + this.age + ' years old.');
};

//new 연산자로 생성자로부터 동일한 틀을 가지고 있는 복사본 객체인 인스턴스를 생성
const instance = new Student1({ name: 'David', age: 20 });
//복사가된 각 개별적인 인스턴스들은 자유롭게 prototype에 접근해서 등록된 메서드를 호출가능
instance.inform();

//ES6에서부터는 위의 불편한 프로토타입 기반 객체지향 분법을 마치 JAVA의 클래스문법을 따라해서 코드 가독성 높임
class Student2 {
	constructor(props) {
		this.name = props.name;
		this.age = props.age;
	}

	inform() {
		console.log('My Name is ' + this.name + '! ' + 'I am ' + this.age + ' years old.');
	}
}

const instance2 = new Student2({ name: 'Emily', age: 30 });
console.log(instance2);
instance2.inform();

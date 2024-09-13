/*
  객체 : 
  복잡한 구조의 자료형들을 그룹화해서 관리하기 위한 자료형
  {key1: value1, key2:value2} key:value를 property
  여러개의 property를 중괄호로 그룹화 시켜놓은 형태

  객체를 생성하는 방식
  1. 객체 리터럴방식 : 직접 중괄호를 감싸고 원하는 property를 생성하는 방식
  2. 생성자함수를 통한 인스턴스 : 생성자함수 (객체를 생성하는 특별한 함수)

  생성자함수를 통해 인스턴스(복사본 객체) 객체를 생성하는 경우
  : 동일한 구조의 객체를 여러개 대량 복사해야 되는 경우
  : 생성자함수(붕어빵틀), 인스턴스 (붕어빵틀로 뽑아낸 각각의 붕어빵들)

  객체지향 프로그래밍
  : 대단위 프로젝트에서 동일한 기능의 함수, 동일한 기능의 자료를 가지고 있는 복사본 (인스턴스 객체)를
  생성할 수 있는 시스템적인 프로그래밍 방법론 (리액트16버전 이전, 클래스를 통한 컴포넌트 제작)

  함수형 프로그래밍
  : 호이스팅과 렉시컬 스코프를 활용한 클로저를 바탕으로 특정 기능마다의 변수, 함수를 모듈화해서 재사용하는 프로그래밍 방법론 (리액트 16.4버전부터 함수형 프로그래밍 방식 고차함수 개념으로 컴포넌트 제작)
*/

//객체 리터럴 방식
const student1 = {
	name: 'Andy',
	age: 20,
	isFemale: false
};

//객체명.propertyKey
console.log(student1.name);

//연관배열 형식
console.log(student1['age']);

//객체의 property key에 함수도 등록 가능
const student2 = {
	name: 'Julia',
	age: 30,
	isFemale: true,
	inform: () => {
		//console.log('My name is Julia and I am 30 years old.');
		console.log(this);
	}
};

//객체 안에 등록되어 있는 함수를 메서드(prototype에 등록된 함수: 메서드)
//자바스크립트에서는 이처럼 객체의 property로 등록가능하거나 함수의 인수로 전달가능하거나
//변수에 대입할 수 있는 함수를 일급 객체라고 표현
student2.inform();

//객체리터럴 안쪽에서의 this: widnow객체 (전역객체)

//생성자를 통한 인스턴스를 복사하는 법
function Student(props) {
	this.name = props.name; // 생성자안쪽의 this: 해당 생성자를 통해서 앞으로 복사가될 인스턴스 객체를 지칭
	this.age = props.age || 20; //대입되는 값뒤에 ||연산자를 입력하면 해당 값이 undefined일때 대체값 설정
	this.isFemale = props.isFemale;
}
//생성자에 자동 생성된 prototype에 property를 등록하고 모든 인스턴스들이 재활용할만한 함수 등록 가능 (메서드)
Student.prototype.inform = function () {
	console.log('My Name is ' + this.name + ' and I am' + this.age + 'years old.');
};
//아래와 같이 new 연산자를 이용해서 Student 생성자 함수 호출하면
//인스턴스라는 특별한 복사본 객체를 생성가능
//인스턴스 객체는 같은 생성자함수를 통해서 생성된 모든 인스턴스들이 공유할 수 있는 prototype이라는 공간을 공유
//prototype: 해당 복사본 객체들이 공통적으로 활용해야 되는 함수를 등록 (메서드)
const studentCopy1 = new Student({ name: 'Emily', isFemale: true });
const studentCopy2 = new Student({ name: 'David', isFemale: false });
const studentCopy3 = new Student({ name: 'Michael', isFemale: false, age: 19 });
//생성자 함수를 통해서 인스턴스라는 복사본을 만들면 약속된 정보값과 매칭되지 않는 값을 거를 수 있음
//Sudent라는 생성자 함수 안에는 address값을 인스턴스로 전달하는 항목이 없기 때문에 의도치 않은 address정보가 입력되어도
//인스턴스에는 잘못된 정보가 전달되지 않음
const studentCopy4 = new Student({ name: 'Paul', isFemale: false, address: 'Seoul' });
console.log(studentCopy1);
console.log(studentCopy2);
console.log(studentCopy3);
console.log(studentCopy4);
studentCopy1.inform();
studentCopy2.inform();
/*
  new 생성자함수() --> 인스턴스라는 공통의 틀을 가지고있는 복사본 객체를 대량 생산 가능
  각각의 인스턴스들은 메서드라는 특정 함수를 공유하면서 자유롭게 호출 가능
  인스턴스라는 복사본 객체를 생성해서 작업하는 프로그래밍 방법론 : 객체지향 프로그래밍
  객체지향 프로그래밍을 쓰는 이유 : 동일한 구조의 객체를 안전하게 생성해서 쓰기위함, 반복되는 함수를 인스턴스별로 적용해서 재활용하기 위함
*/

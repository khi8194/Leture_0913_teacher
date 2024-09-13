//구조 분해 할당, 비구조화할당 (Destructure Assignment)
const colors = ['red', 'green', 'blue'];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];

const myFavoraitColor = ['hotpink', 'aqua', 'violet'];
const [c1, c2, c3] = myFavoraitColor;
console.log(c3);

const student1 = {
	name: 'Andy',
	age: 30,
	address: 'Seoul'
};

// const name = student1.name;
// const age = student1.age;
// const address = student1.address;

//객체의 경우는 무조건 객체의 property key로만 비구조화할당 가능
//뽑아낸 값의 변수명을 변경할시  key:원하는변수명
const { name: name1, age, address } = student1;
console.log(name1);
console.log(age);
console.log(address);

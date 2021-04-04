import { add } from './util.js';

function dividir(num1: number, num2: number): number{
    return num1 / num2;
}


console.log(dividir(7, 2));
console.log(add(7, 2));

const response = async() => await fetch("https://tivrfoa.github.io/");
console.log(response);

response().then(r => {
	console.log(r);
	return r.text();
}).then(text => {
	console.log(text);
}).catch(e => {
	console.error(e);
});

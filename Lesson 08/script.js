//1
let a = ['a', 'b', 'c'];
//alert(a);

//2
a.push(1, 2, 3);
console.log(a);

//3
let b = ['Привет,', 'мир', '!'];
let str = '';
let out = document.querySelector('#hello');
for (let i = 0; i<b.length; i++) {
    str += b[i] + " ";
}
out.innerHTML = str;

// push
let c = [1, 2, 3];
c.push(4, 5, 6);
console.log(c);

//unshift
let d = [1, 2, 3];
d.unshift(4, 5, 6);
console.log(d);

//shift
let x = ['js', 'css', 'jq'];
let y = x.shift();
document.querySelector('#shift').innerHTML = y;

//pop
let z = x.pop();
document.querySelector('#pop').innerHTML = z;

//slice
let q = [1, 2, 3, 4, 5];
let v = q.slice(0,3);
console.log(v);

let u = q.slice(3,);
console.log(u);
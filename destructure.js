const person = { name: 'Jack William', age: 17, job: 'Facebooker', gfName: 'Ema Watson', address: 'KocuKhet', phone:'01765842641', friends: ['Tom Hanks', 'Tom cruise','Tom Earn']}


// const { phone } = { name: 'Jack William', age: 17, job: 'Facebooker', gfName: 'Ema Watson', address: 'KocuKhet', phone:'01765842641', friends: ['Tom Hanks', 'Tom cruise','Tom Earn']}
const { phone, gfName, address } = person
// const gfName = person.gfName
// const age = person.age


// console.log(gfName, phone, address);
// console.log(gfName, phone, address);
 
const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan']
const [chotoFriend, nextFriend, ...restFriend] = friends
// console.log(chotoFriend, nextFriend);
console.log(...restFriend);


// complex object...mane object er vitor object

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola Bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info
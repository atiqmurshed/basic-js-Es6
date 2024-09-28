
//filter select 
const numbers = [24, 3, 52, 5, 2];
const palyers = [41, 55, 69, 65, 90, 54, 20, 35];
// const selected = palyers.filter(p => p > 70);
// const selected = palyers.filter(p => p > 100);
const selected = palyers.filter(p => p % 2 === 1)
console.log(selected);

const friends = ['tom', 'kobir', 'jzida', 'khaleda'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);

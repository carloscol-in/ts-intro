"use strict";
exports.__esModule = true;
// [1, 'abc']
var user;
user = [1, 'abc'];
console.log('user', user);
console.log('username', user[1]);
console.log('username string length', user[1].length);
console.log('id', user[0]);
// tuples with multiple values
// id, username, isPro
var userInfo;
userInfo = [2, 'abc', true];
console.log('userInfo', userInfo);
console.log('username', userInfo[1]);
// tuple array
var arr = [];
arr.push([1, 'abc']);
arr.push([2, 'def']);
arr.push([3, 'ghi']);
console.log('array', arr);
// array functions
arr[2][1] = 'xyz';
console.log('arr', arr);
// tuple for post
// id, title, description, published
var post;
post = [1, 'abc', 'abc', true];
console.log('post', post);
var posts = [];
posts.push([1, 'abc', 'abc', true]);
posts.push([1, 'abc', 'abc', true]);
// posts.push([1, 'abc', 231, 'shit', 'hello']); // lint error
console.log('posts', posts);

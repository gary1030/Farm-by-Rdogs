import axios from 'axios'
const instance = axios.create ({ baseURL: 'http://localhost:4000/api' });

//to check whether the email has been registered
//if existing, return "email has been registered!", else return "not exist" 
const checkEmailExist = async (email) => {
	const {msg: msg} = await instance.get('/checkEmailExist', { params: { email } });
	return msg;
}

//to check whether the user exists
//if existing, return "User exists", else return "not exist" 
const checkUserExist = async (username) => {
	const {msg: msg} = await instance.get('/checkUserExist', { params: { username } });
	return msg;
}

// create a user
const createUser = async (email, username, hashValue) => {
	// email = 'ntuim@gmail.com';
	// username = 'ntuim';
	// hashValue = 'fuckU';
	const { msg: msg } = await instance.post('/createUser', { params: { email, username, hashValue } });
	return msg;
}

// get friend list
const getFriendList = async (username) =>{
    const {
		data : {message, friendList}
	} = await instance.get('/getFriendList', { params: { username } })
	return friendList;
}

export { checkEmailExist, checkUserExist, createUser, getFriendList };

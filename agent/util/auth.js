const userInfo = 'vue_userInfo'
const externalLogintoken = 'vue_externalLogintoken'
const authtoken = 'vue_authtoken'
const admin_user = 'admin_user'


export async function getadminUser() {
	var result= await uni.getStorage({
		key: admin_user,
	})
	return result[1].data
}

export function setadminUser(token) {
	return uni.setStorage({
		key: admin_user,
		data: token
	})
}

export function removeadminUser() {
	return uni.removeStorage({
		key: admin_user
	})
}


export async function getAuthtoken() {
	var result= await uni.getStorage({
		key: authtoken,
	})
	return result[1].data
}

export function setAuthtoken(token) {
	return uni.setStorage({
		key: authtoken,
		data: token
	})
}

export function removeAuthtoken() {
	return uni.removeStorage({
		key: authtoken
	})
}


export async function getUserInfo() {
	var result= await uni.getStorage({
		key: userInfo,
	})
	return result[1].data
}
export function setUserInfo(user) {
	return uni.setStorage({
		key: userInfo,
		data: user
	})
}

export function removeUserInfo() {
	return uni.removeStorage({
		key: userInfo
	})
}
export function setExternalLogintoken(token) {
	return uni.setStorage({
		key: externalLogintoken,
		data: token
	})
}
export async function getExternalLogintoken() {
	var result= await uni.getStorage({
		key: externalLogintoken,
	})
	return result[1].data
}

export function removeExternalLogintoken() {
	return uni.removeStorage({
		key: externalLogintoken
	})
}

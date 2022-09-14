
const validateUserData = (userData) => {

	if (userData.email === undefined || typeof(userData.email) !== "string") {
		// email is required and it must be a string
		return {
			isValid: false,
            message: "Email is required and it must be a string"
		}
	} 
	
	if (userData.firstName === undefined || typeof(userData.firstName) !== "string") {
		// firstName is required and it must be a string
		return {
			isValid: false,
            message: "First name is required and it must be a string"
		}
	}
	
	if (userData.lastName === undefined || typeof(userData.lastName) !== "string") {
		// lastName is required and it must be a string
		return {
			isValid: false,
            message: "Last name is required and it must be a string"
		}
	} 
	
	if (userData.age !== undefined && typeof(userData.age) !== "number") {
		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
		return {
			isValid: false,
			message: "Age must be a number"
		}
	} 
	
	return {
		isValid: true
	}
    
    // if (userData.favoriteFoods !== undefined && Array.isArray(userData.favoriteFoods) && userData.favoriteFoods.length > 0) {
	// 	// Array.isArray() will check to see if the variable is an array

	// 	let isFavoriteFoodsStrings = true;

	// 	for (let i = 0; i < userData.favoriteFoods.length; i++) {
	// 		if (typeof(userData.favoriteFoods[i]) !== 'string') {
	// 			isFavoriteFoodsStrings = false
	// 		}
	// 	}
// 		if (isFavoriteFoodsStrings === false) {
// 			return {
// 				isValid: false
// 			}
// 		}
// 	} 
	
// 	if (userData.age !== undefined && typeof(userData.age) !== "number") {
// 		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
// 		return {
// 			isValid: false
// 		}
// 	} 
		
// 	return {
// 		isValid: true
// 	}

}

module.exports = {
	// These two lines are equivalent because the variable name and the key for the object are the same name. Typically, we write the short-hand version.
	// validateUserData: validateUserData
	validateUserData,
}














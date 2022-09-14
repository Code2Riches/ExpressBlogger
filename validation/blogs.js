const validateBlogData = (blogData) => {
    console.log(blogData)
    console.log(typeof(blogData.email))

    if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
		return {
            isValid: false,
            message: "Title is required and it must be a string"
        }
	} 

    if (blogData.text === undefined || typeof(blogData.text) !== "string" || blogData.text.length > 40) {
		return {
            isValid: false,
            message: "Text is required and it must be a string"
        }
	} 

    if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length > 40) {
		return {
            isValid: false,
            message: "Author is required and it must be a string"
        }
	} 

    if (blogData.category !== undefined && typeof(blogData.author) !== "string" || blogData.author.length > 40) {
		return {
            isValid: false,
            message: "Author is required and it must be a string"
        }
	} 

}

module.exports = {
	validateBlogData,
}
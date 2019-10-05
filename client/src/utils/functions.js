export const createActionName = (reducerName, name) => `app/${reducerName}/${name}`;
export const cutText = (content, maxLength) => {

    if (maxLength > 0) {

        if (maxLength < content.length) {
            let cutOutText = content.substr(0, maxLength + 1);
            let checkChar = cutOutText.substring(cutOutText.length - 1, cutOutText.length);

            if (checkChar === " ") {
                return `${cutOutText.substring(0, cutOutText.length - 1)}...`;
            } else {
                return `${cutOutText.substr(0, cutOutText.lastIndexOf(" "))}...`;
            }
        } else {
            return content;
        }
    } else {
        return "Error";
    }
};
export const checkUserPosts = (user, postId) => {
    let result = false;
    user.posts.forEach(post => {

        if (post.id === postId) {
            result = true
        }});
    return result
};


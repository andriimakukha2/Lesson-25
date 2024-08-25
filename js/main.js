// #1

function createDomElement(tagName, textContent, container) {
const newElement = document.createElement(tagName);
newElement.innerText = textContent;
container.appendChild(newElement);
return newElement;
}

// #2

function setUserInfoCookie(key, value) {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(value);

    const cookieValue = '${encodedKey}=${encodedValue}';

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (10 *1000));

    const cookieString = `userInfo=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;

    document.cookie = cookieString;

    console.log(`Cookie "userInfo" встановлено з даними: ${cookieValue}`);
}

// #3

function saveUserInfo(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
    const value = sessionStorage.getItem(key);
    console.log(`Retrieved ${key}: ${value}`);

    return value;
}


export { createDomElement, setUserInfoCookie, saveUserInfo, getUserInfo }
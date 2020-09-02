const attrName = 'data-restaurant'
if (!window.localStorage.getItem(attrName)) {
    window.localStorage.setItem(attrName, "fd13011")
}
const el = document.getElementById("flipdish-menu");
if (el) {
    el.setAttribute(attrName, window.localStorage.getItem(attrName))
    console.log(attrName, window.localStorage.getItem(attrName))
}

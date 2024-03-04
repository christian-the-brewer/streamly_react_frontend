let apiUrl;

const apiUrls = {
    production: `<will be prod url`,
    development: "http://localhost:3000",
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
export default apiUrl;
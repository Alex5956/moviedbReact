
const getApi = async (url) => {
    let response = await fetch(url);
    return await response.json();
}

export {getApi};

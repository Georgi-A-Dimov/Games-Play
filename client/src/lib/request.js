const buildOptions = (data) => {
    let options = {};

    if(data) {
        options.body = JSON.stringify(data);
        options.header = {
            'Content-Type': 'application/json'
        };
    }
    return options;
};

const request = async(method, url, data) => {

    const response = await fetch(url, {
        method,
        ...buildOptions(data),
    });

    const result = response.json();
    return result;
};
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
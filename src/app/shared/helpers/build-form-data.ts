export function buildFormData(data) {
    const formData = new FormData();
    appendData(formData, data);

    return formData;
}

function appendData(formData, data, parentKey = '') {
    if (data instanceof File) {
        formData.append(parentKey, data, data.name || `file.${data.type.split('/')[1]}`);
    } else if (data && typeof data === 'object' && !(data instanceof Date)) {
        Object.keys(data).forEach(key => {
            appendData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data ? data : '';

        formData.append(parentKey, value);
    }
}

export function groupBy (array, key) {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue)
        return result
    }, {})
}

export function filterBy (array, prop) {
    return array.filter(event => new Date(event[`${prop}`]).getMonth() >= new Date().getMonth())
}

export function sortByDate (array, prop) {
    return array.sort((a, b) => new Date(a[`${prop}`]) - new Date(b[`${prop}`]))
}
function last(data, n = data.length - 1) {
    return data.splice(data.length - n, data.length)
}
module.exports = last;
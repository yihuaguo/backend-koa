export const requireCheck = (toCheck = {}, check = []) => {
    let pass = true
    check.map(item => {
        if (!(item in toCheck)) {
            pass = false
        }
    })
    return pass
}

export default requireCheck
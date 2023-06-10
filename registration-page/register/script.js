const register = $('.register')
const inputs = $('input')
const alreadyHaveUser = $('.have-account')
const users = [
    {
        username: 'test',
        password: 'test'
    }
]
console.log(inputs)

register.click((event) => {
    users.push({
        username: inputs[0].value,
        password: inputs[1].value
    })
    localStorage.setItem('users', JSON.stringify(users))
    location.href = '../login/index.html'
})
alreadyHaveUser.addEventListener('click', () => {
    location.href = '../login/index.html'
})
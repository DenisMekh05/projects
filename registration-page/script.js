const inputs = document.querySelectorAll('input')
const login = document.querySelector('.login')
const register = document.querySelector('.register')
const errorNoUser = document.querySelector('.error-no-user')
const errorAlreadyExist = document.querySelector('.error-already-exist')

let theSameUser = 0
let newUser = 0

const users = [
    {
        username: 'test',
        password: 'test'
    }
]

login.addEventListener('click', (event) => {
    event.preventDefault()
    users.some((user) => {
        if (user.username == inputs[0].value && user.password == inputs[1].value) {
            localStorage.clear()
            localStorage.setItem('user', JSON.stringify(users))
            window.location = '/26/index.html'
        } else {
            errorNoUser.style.opacity = 1
            setTimeout(() => {
                errorNoUser.style.opacity = 0
            }, 2000)
        }
    })
})
register.addEventListener('click', (event) => {
    event.preventDefault()
    users.push({
        username: inputs[0].value,
        password: inputs[1].value
    })
    localStorage.clear()
    localStorage.setItem('users', JSON.stringify(users))
})
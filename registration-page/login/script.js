const inputs = $('input')
const login = $('.login')

let users = new Array
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}

login.addEventListener('click', (event) => {
    users = JSON.parse(localStorage.getItem('users'))
    if (users.some(user => user.username == inputs[0].value && user.password == inputs[1].value)) {
        location = 'example.com'
    } else {
        alert('user not found')
    }
})
$('.no-user').click(() => {
    location.href = '../register/index.html'
})
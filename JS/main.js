window.onload = function () {
    var fullName = document.getElementsByClassName('form-text')[0];
    fullName.onkeypress = function (event) {
        var fullnames = parseInt(event.key)
        if (!isNaN(fullnames)) {
            event.preventDefault();
        }
    }
    var username = document.getElementsByClassName('form-text')[1];
    username.onkeypress = function (event) {
        if (event.key === ',' || event.key === '.') {
            event.preventDefault()
        }
    }
    let cheks = document.getElementById('cheks')
    cheks.onchange = function (event) {
        if (event.target.checked) {
            console.log('Согласен')
        } else {
            console.log('Не согласен')
        }
    }
    var form = document.getElementById('button-text')
    form.onclick = function (event) {
        var click = document.getElementsByClassName('form-text')
        if (click[0].value === '') {
            alert('Заполните поле ' + document.getElementsByTagName('p')[0].innerText);
            return
        }
        if (click[1].value === '') {
            alert('Заполните поле ' + document.getElementsByTagName('p')[1].innerText);
            return
        }
        if (click[2].value === '') {
            alert('Заполните поле ' + document.getElementsByTagName('p')[2].innerText);
            return
        }
        if (click[3].value === '') {
            alert('Заполните поле ' + document.getElementsByTagName('p')[3].innerText);
            return
        }
        if (click[4].value === '') {
            alert('Заполните поле ' + document.getElementsByTagName('p')[4].innerText);
            return
        }
        let chek = document.getElementById('cheks')
        if (chek.checked) {
        } else {
            alert('Не выбран')
            return;
        }
        if (click[3].value !== click[4].value) {
            alert('пароли не совпадают')
            return;
        } else {
            alert('OKAY')
        }
    }
    var ssyl = document.getElementsByTagName("a")[0];
    ssyl.onclick = function () {
        document.getElementsByClassName('title')[0].innerHTML = 'Log in to the system';
        document.getElementById('fullname').remove();
        document.getElementById('email').remove();
        document.getElementById('pass-repeat').remove();
        document.getElementsByClassName('chek')[0].remove();
        document.getElementsByClassName('fotter')[0].remove();
        document.getElementById('button-text').innerText = 'Sign In';
    }
}


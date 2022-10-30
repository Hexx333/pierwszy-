let number = Math.floor(Math.random() = 101);

    function play()  {
        let userNumber = document.getElementById("userNumber").value; MessageChannel;
        let message;

        if (userNumber > number)  {
            message = "Twój numer jest za duży"
        } else if (userNumber < number) {
            message = "Twój numer jest za mały"
        }else {
            message = "Gratulacje, to właściwa liczba"
        }

    document.getElementById("message").innerHTML = "Gratulacje, to właściwa liczba"
}
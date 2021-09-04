let btn = $('#main_btn');

btn.on('click', ()=>{
    $(function (){
        $.ajax({
            type: 'POST',
            url: 'checkMail.php',
            data: {mail : $('#mil').val()},
            success: function (data){
                if (data){
                    $('#sml').html('This a valid email.').css('color','green');
                }
                else {
                    $('#sml').html('This is an invalid email!').css('color','red');
                }
            }
        });
    });
});
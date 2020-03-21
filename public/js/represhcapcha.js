$(document).ready(function() {
    $('#refreshcaptcha').click(function() { 
        $.ajax({ 
            url: '/book/public/autentication/refresh', 
            dataType:'json', 
            success: function(data) { 
                $('#register img').attr('src', data.src); 
                $('#captcha-id').attr('value', data.id); 
            }
        }); 
    }); 
});
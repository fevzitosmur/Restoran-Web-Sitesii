// reservation.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function (event) {
        // Formun varsayılan submit davranışını engelle
        event.preventDefault();
        
        // Alert mesajı göster
        alert('Sitemiz yapım aşamasındadır.Anlayışınız için teşekkürler!');
        
        // Formu sıfırla (isteğe bağlı)
        form.reset();
    });
});

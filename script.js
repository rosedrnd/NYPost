$(document).ready(
    
    function () {
        let taux = 0.8;
        
        function titi() {
            taux = taux + 0.1; 
            $('#nasdaq-value').text(taux);
            setTimeout(function () {
                titi(); 
            }, 5000); 
        }
     
        titi(); 
    
        $('.lien-inter').cick(function() {
            $('.book-to-change').text("Le Podavast de l'Amour moderne");
            $('.book-to-change').addClass('text-en-rouge');
        });
    }    

); 
$(document).ready(

    function () {
        let taux = 0.8;

        function titi() {
            taux = taux + 0.1;

            $('#nasdaq-value').text(taux);

            setTimeout(function () {
                titi();
            }, 1000);
        }

        titi();

        $('.lien-inter').click(

            function() {

                $('.book-to-change').text("Le Podcast de l'Amour Moderne");
                $('.book-to-change').addClass('text-en-rouge');

            }

        );
    }

);
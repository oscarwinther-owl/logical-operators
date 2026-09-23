// Husk fra dag 1: skriv "use strict" herunder


function tjekRabat(brand, price) {

    // Nyt i dag: let bruges her, fordi finalPrice's værdi kan ændre sig, hvis rabatten gælder.
    // (Til sammenligning: const bruges, når værdien IKKE skal ændre sig - som i priskategori-opgaven.)
    let finalPrice = price;

    // Skriv if/else-strukturen selv herinde, ligesom i priskategori-opgaven.
    //
    // Nyt i dag:
    // - === tjekker, om to værdier er helt ens (her: om brand er præcis "Volkswagen" eller "Skoda")
    // - || betyder "eller" - mindst én af betingelserne skal være sand
    // - && betyder "og" - begge betingelser skal være sande på samme tid
    //
    // Hvis (brand er "Volkswagen" ELLER brand er "Skoda") OG price er mindre end 300000, så:
    //   - træk 20000 fra finalPrice
    //   - log `${brand} er omfattet af kampagnen. Ny pris: ${finalPrice} kr.`
    // Ellers:
    //   - log `${brand} er ikke omfattet af kampagnen. Pris: ${finalPrice} kr.`

}

tjekRabat(`Volkswagen`, 250000);
tjekRabat(`Skoda`, 320000);
tjekRabat(`Tesla`, 200000);

// Prøv selv (efter du har løst opgaven): ret "let finalPrice" til "const finalPrice" ovenfor,
// og kør koden igen. Se i konsollen, hvilken fejl du får, og overvej hvorfor de to sidste
// tjekRabat-kald (Skoda og Tesla) slet ikke kommer med i outputtet, når fejlen opstår.
// Ret den tilbage til "let", når du har set fejlen.

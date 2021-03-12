//function aantalAanWinkelwagenToevoegen()
//{
//    //Teller hoeveel producten er zijn geselecteerd
//    var getal = 0;
//    
//    //Loopt door de session storage heen
//    Object.keys(sessionStorage).forEach(function(key)
//    {
//        //Als de value van de key een Getal is
//        if(sessionStorage.getItem(key) != "" && parseInt(sessionStorage.getItem(key)) >= 0)
//        {
//            //Het getal aan de variabelen optellen
//            getal += parseInt(sessionStorage.getItem(key));
//        }
//    });
//    
//    //Voegt het aantal producten als getal aan de winkelwagen toe
//    document.getElementById("winkelwagen__aantal").innerHTML = getal;
//    
//    //Als er geen gegevens in de winkelwagen zit, het getal weghalen
//    if(getal == 0)
//       document.getElementById("winkelwagen__aantal").style.display = "none";
//    else
//        document.getElementById("winkelwagen__aantal").style.display = "block";
//}
////Getal in winkelwagen aanpassen
//aantalAanWinkelwagenToevoegen();


function productenLaden()
{
    //Laad de aantallen van de producten in de span
    
    //Product 1: Sportbidon
    if(sessionStorage.getItem("Sportbidon") != null && document.getElementById("aantalSportbidon") != null)
    {
        document.getElementById("aantalSportbidon").innerHTML = sessionStorage.getItem("Sportbidon");
    }
    
    //Product 2: Fitbit
    if(sessionStorage.getItem("Fitbit") != null && document.getElementById("aantalFitbit") != null)
    {
        document.getElementById("aantalFitbit").innerHTML = sessionStorage.getItem("Fitbit");
    }
    
    //Product 3: Dumbell 5KG
    if(sessionStorage.getItem("Dumbell 5KG") != null && document.getElementById("aantalDumbell5KG") != null)
    {
        document.getElementById("aantalDumbell5KG").innerHTML = sessionStorage.getItem("Dumbell 5KG");
    }
    
    //Product 4: Dumbell 10KG
    if(sessionStorage.getItem("Dumbell 10KG") != null && document.getElementById("aantalDumbell10KG") != null)
    {
        document.getElementById("aantalDumbell10KG").innerHTML = sessionStorage.getItem("Dumbell 10KG");
    }
    
    //Product 5: Dumbell 15KG
    if(sessionStorage.getItem("Dumbell 15KG") != null && document.getElementById("aantalDumbell15KG") != null)
    {
        document.getElementById("aantalDumbell15KG").innerHTML = sessionStorage.getItem("Dumbell 15KG");
    }
    
    //Product 6: Dumbell 20KG
    if(sessionStorage.getItem("Dumbell 20KG") != null && document.getElementById("aantalDumbell20KG") != null)
    {
        document.getElementById("aantalDumbell20KG").innerHTML = sessionStorage.getItem("Dumbell 20KG");
    }
    
    //Product 7: Sporttas
    if(sessionStorage.getItem("Sporttas") != null && document.getElementById("aantalSporttas") != null)
    {
        document.getElementById("aantalSporttas").innerHTML = sessionStorage.getItem("Sporttas");
    }
    
    //Product 8: Protein Shake
    if(sessionStorage.getItem("Protein Shake") != null && document.getElementById("aantalProteinShake") != null)
    {
        document.getElementById("aantalProteinShake").innerHTML = sessionStorage.getItem("Protein Shake");
    }
    
    //Product 9: Nutrition Bar
    if(sessionStorage.getItem("Nutrition Bar") != null && document.getElementById("aantalNutritionBar") != null)
    {
        document.getElementById("aantalNutritionBar").innerHTML = sessionStorage.getItem("Nutrition Bar");
    }
    
    //Product 10: Handdoek
    if(sessionStorage.getItem("Handdoek") != null && document.getElementById("aantalHanddoek") != null)
    {
        document.getElementById("aantalHanddoek").innerHTML = sessionStorage.getItem("Handdoek");
    }
    
    //Product 11: Oortjes
    if(sessionStorage.getItem("Oortjes") != null && document.getElementById("aantalOortjes") != null)
    {
        document.getElementById("aantalOortjes").innerHTML = sessionStorage.getItem("Oortjes");
    }
    
    //Product 12: Koptelefoon
    if(sessionStorage.getItem("Koptelefoon") != null && document.getElementById("aantalKoptelefoons") != null)
    {
        document.getElementById("aantalKoptelefoons").innerHTML = sessionStorage.getItem("Koptelefoon");
    }
    
    //Product 13: Sportschoen
    if(sessionStorage.getItem("Sportschoen") != null && document.getElementById("aantalSportschoenen") != null)
    {
        document.getElementById("aantalSportschoenen").innerHTML = sessionStorage.getItem("Sportschoen");
    }
    
    //Product 14: Sportbroek
    if(sessionStorage.getItem("Sportbroek") != null && document.getElementById("aantalSportbroeken") != null)
    {
        document.getElementById("aantalSportbroeken").innerHTML = sessionStorage.getItem("Sportbroek");
    }
    
    //Product 15: Sportshirt
    if(sessionStorage.getItem("Sportshirt") != null && document.getElementById("aantalSportshirts") != null)
    {
        document.getElementById("aantalSportshirts").innerHTML = sessionStorage.getItem("Sportshirt");
    }

    //Product 16: Sportdrank
    if(sessionStorage.getItem("Sportdrank") != null && document.getElementById("aantalSportdrank") != null)
    {
        document.getElementById("aantalSportdrank").innerHTML = sessionStorage.getItem("Sportdrank");
    }
}
productenLaden();

//Product toevoegen
function productenToevoegen(afbeelding, product, aantal, prijs)
{
    productToevoegen(afbeelding, product.innerText, aantal.id, prijs.innerText);

    aantalAanWinkelwagenToevoegen();
}

function productToevoegen(afbeelding, product, aantal, prijs)
{
    //Het aantal van het 'hard-coded' product ophalen
    var aantalProducten = sessionStorage.getItem(product);
    //Als er geen aantal bestaat
    if(aantalProducten == null)
        aantalProducten = 0;
    
    //Als het product wordt toegevoegd, een 1 in de span plaatsen en alles in de session opslaan
    if(aantalProducten == 0)
    {
        document.getElementById(aantal).innerHTML = 1;

        //Product met de afbeelding en de prijs aan de sessionstorage toevoegen
        sessionStorage.setItem(product, 1);
        sessionStorage.setItem(product + " afbeelding", afbeelding);
        sessionStorage.setItem(product + " prijs", prijs);
    }
    //Anders het aantal in de sessie met 1 verhogen en in de 'span' aanpassen
    else
    {
        //Het aantal van het product in de session storage met 1 verhogen
        sessionStorage.setItem(product, parseInt(aantalProducten) + 1);
        //Het aantal in de span met 1 verhogen
        document.getElementById(aantal).innerHTML = parseInt(aantalProducten) + 1;
    }
}

//Product verlagen
function productenVerlagen(afbeelding, product, aantal, prijs)
{
    productVerlagen(afbeelding, product.innerText, aantal.id, prijs.innerText);

    aantalAanWinkelwagenToevoegen();
}

function productVerlagen(afbeelding, product, aantal, prijs)
{
    //Aantal producten ophalen
    var aantalProducten = sessionStorage.getItem(product);

    //Als er producten zijn gekozen
    if(aantalProducten > 0)
    {
        //Als het product wordt verlaagd, het getal in de span verminderen
        document.getElementById(aantal).innerHTML = aantalProducten - 1;

        //Het aantal in de session storage met 1 verminderen
        sessionStorage.setItem(product, aantalProducten - 1);

        aantalProducten--;
    }

    //Als je het product uit je winkelwagen verwijderd
    if(aantalProducten == 0)
    {
        //Gegevens uit de session storage verwijderen
        sessionStorage.removeItem(product);
        sessionStorage.removeItem(product + " afbeelding");
        sessionStorage.removeItem(product + " prijs");
    }
}

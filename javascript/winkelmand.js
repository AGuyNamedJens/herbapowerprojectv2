/*  Prooducten op de winkelmand pagina tonen    */

function toonProducten()
{
    // Als 'Sportbidon' in het winkelwagen zit
    toonProduct("winkelmand", "Sportbidon", "sportbidonTitel", "sportbidon_Afbeelding", "aantalSportbidon", "sportbidon_Prijs");

    // Als 'FitBit' in het winkelwagen zit
    toonProduct("winkelmand", "Fitbit", "FitbitTitel", "Fitbit_Afbeelding", "aantalFitbit", "fitbit_Prijs");

    // TEST 'Dumbell 5KG' in het winkelwagen zit
    toonProduct("winkelmand", "Dumbell 5KG", "dumbell5KGTitel", "dumbell5KG_Afbeelding", "aantalDumbell5KG", "dumbell5KG_Prijs");

    // Als 'Dumbell 10KG' in het winkelwagen zit
    toonProduct("winkelmand", "Dumbell 10KG", "dumbell10KGTitel", "dumbell10KG_Afbeelding", "aantalDumbell10KG", "dumbell10KG_Prijs");

    // Als 'Dumbell 15KG' in het winkelwagen zit
    toonProduct("winkelmand", "Dumbell 15KG", "dumbell15KGTitel", "dumbell15KG_Afbeelding", "aantalDumbell15KG", "dumbell15KG_Prijs");

    // Als 'Dumbell 20KG' in het winkelwagen zit
    toonProduct("winkelmand", "Dumbell 20KG", "dumbell20KGTitel", "dumbell20KG_Afbeelding", "aantalDumbell20KG", "dumbell20KG_Prijs");
    
    // Als 'Sporttas' in het winkelwagen zit
    toonProduct("winkelmand", "Sporttas", "sporttasTitel", "sporttas_Afbeelding", "aantalSporttas", "sporttas_Prijs");

    // Als 'Protein Shake' in het winkelwagen zit
    toonProduct("winkelmand", "Protein Shake", "proteinShakeTitel", "proteinShake_Afbeelding", "aantalProteinShake", "proteinShake_Prijs");

    // Als 'Nutrition Bar' in het winkelwagen zit
    toonProduct("winkelmand", "Nutrition Bar", "nutritionBarTitel", "nutritionBar_Afbeelding", "aantalNutritionBar", "nutritionBar_Prijs");

    // Als 'Handdoek' in het winkelwagen zit
    toonProduct("winkelmand", "Handdoek", "handdoekTitel", "handdoek_Afbeelding", "aantalHanddoeken", "handdoek_Prijs");
    
    // Als 'Oortjes' in het winkelwagen zit
    toonProduct("winkelmand", "Oortjes", "oortjesTitel", "oortjes_Afbeelding", "aantalOortjes", "oortjes_Prijs");

    // Als 'Koptelefoon' in het winkelwagen zit
    toonProduct("winkelmand", "Koptelefoon", "koptelefoonTitel", "koptelefoon_Afbeelding", "aantalKoptelefoons", "koptelefoon_Prijs");

    // Als 'Sportschoen' in het winkelwagen zit
    toonProduct("winkelmand", "Sportschoen", "sportschoenTitel", "sportschoen_Afbeelding", "aantalSportschoen", "sportschoen_Prijs");

    // Als 'Sportbroek' in het winkelwagen zit
    toonProduct("winkelmand", "Sportbroek", "sportbroekTitel", "sportbroek_Afbeelding", "aantalSportbroeken", "sportbroek_Prijs");

    // Als 'Sportshirt' in het winkelwagen zit
    toonProduct("winkelmand", "Sportshirt", "sportshirtTitel", "sportshirt_Afbeelding", "aantalSportshirts", "sportshirt_Prijs");

    // Als 'Sportdrank' in het winkelwagen zit
    toonProduct("winkelmand", "Sportdrank", "sportdrankTitel", "sportdrank_Afbeelding", "aantalSportdrank", "sportdrank_Prijs");
}
toonProducten();

function toonProduct(winkelmand, productNaam, productTitel, productAfbeelding, productAantal, productPrijs)
{
    //Checken of de productnaam in de session bestaat
    if(document.getElementById(winkelmand) != null && sessionStorage.getItem(productNaam) != null)
    {
        //Elementen aanmaken
        document.getElementById(productNaam).innerHTML = "<img id='" + productAfbeelding + "'>";
        document.getElementById(productNaam).innerHTML += "<h1 id='" + productTitel + "'></h1>";
        document.getElementById(productNaam).innerHTML += "<p class='prijs'>Prijs</p>";
        document.getElementById(productNaam).innerHTML += "<p class='item' id='" + productPrijs + "'></p>";

        //Product verwijderen (- knop)
        document.getElementById(productNaam).innerHTML += "<div class='circle productVerminderen' onclick='productenVerlagen(" + productAfbeelding  + ',' + productTitel + ',' + productAantal + ',' + productPrijs + ")'> <div class='circle_min'></div> </div>";

        //Aantal producten
        document.getElementById(productNaam).innerHTML += "<p class='item aantalProducten' id='" + productAantal + "'></p>";

        //Product toevoegen (+ knop)
        document.getElementById(productNaam).innerHTML += "<div class='circle productVerhogen' onclick='productenToevoegen(" + productAfbeelding  + ',' + productTitel + ',' + productAantal + ',' + productPrijs + ")'> <div class='circle_plus1'></div> <div class='circle_plus2'></div </div>";

        //Elementen vullen
        document.getElementById(productTitel).innerHTML = productNaam; //"Nike";
        document.getElementById(productAfbeelding).src = sessionStorage.getItem(productNaam + " afbeelding");
        document.getElementById(productAantal).innerHTML = sessionStorage.getItem(productNaam);
        //Hard code 'Prijs' zetten (komt overal in de producten voor)
        document.getElementsByClassName("prijs").innerHTML =  "Prijs<br>";
        document.getElementById(productPrijs).innerHTML = sessionStorage.getItem(productNaam + " prijs");

    }
    else
    {
        // Anders de <section> in HTML van de productnaam verwijderen
        document.getElementById(productNaam).remove();
    }
}

//Checkt of de winkelwagen gevuld is
function checkWinkelwagen()
{
    //Als de winkelwagen leeg is
    if(sessionStorage.length == 0 || sessionStorage.length == 1)
    {
        document.getElementById("leeg").innerHTML = "Het winkelmandje is leeg!";
        document.getElementById("instructie").innerHTML = "Als u verder wilt winkelen <a href='/winkel.html'>klik dan hier</a>";
        document.getElementById("vulKortingscode").remove();
        document.getElementById("kostenOverzicht").remove();

        //Footer onderaan de pagina zetten
        document.getElementById("footer").style.position = "absolute";
        document.getElementById("footer").style.bottom = "0%";
    }
    else
    {
        // De <section> waar de melding van lege winkelmand instaat, verwijderen
        document.getElementById("winkelmandLeeg").remove();

        //Als de winkelwagen gevuld is, de footer wederom onderaan de pagina zetten (haalt de witte rand om de footer weg)
        document.getElementById("footer").style.position = "absolute";
    }
}
checkWinkelwagen();

var kosten;
// Kosten berekenen d.m.v. een foreach door de sessionStorage
function alleKosten()
{
    kosten = 0;
    //Loopt door de session storage heen
    Object.keys(sessionStorage).forEach(function(key)
    {
        //Als de value van de key een Getal is
        if(sessionStorage.getItem(key) != "" && parseInt(sessionStorage.getItem(key)) >= 0)
        {
            //Als de variabele leeg is
            if(kosten == undefined)
            {
                //Variabele een bedrag geven
                kosten = sessionStorage.getItem(key) * sessionStorage.getItem(key + " prijs").substr(1);
            }
            else
            {
                //Het bedrag aan de variabele optellen
                kosten += sessionStorage.getItem(key) * sessionStorage.getItem(key + " prijs").substr(1);
            }
        }
    });

    //Totale kosten incl. btw berekenen
    document.getElementById("inclusiefBTW").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten);

    //Totale kosten excl. btw berekenen
    document.getElementById("exclusiefBTW").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten / 121 * 100);

    if(korting == undefined)
        korting = 0;

    if(kosten == 0)
    {
        //Geen verzendkosten
        document.getElementById("verzendKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format("0");
        //Totale kosten op 0 zetten
        document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format("0");
    }
    //Bedrag hoger dan €100,- geen verzendkosten
    else if(kosten > 100)
    {
        //Geen verzendkosten
        document.getElementById("verzendKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format("0");
        
        if(korting != 0 && kortingscode.value.length > 5)
        {
            //Totaal berekenen o.b.v. kosten incl BTW - de korting
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 0 - korting);
        }
        else
        {
            //Totaal berekenen o.b.v. kosten incl BTW
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 0);
        }
    }
    else
    {
        //€2,99 euro verzendkosten
        document.getElementById("verzendKosten").innerHTML = "+ &nbsp;&nbsp; " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format("2.99");
        
        if(korting != 0 && kortingscode.value.length > 5)
        {
            //Totaal berekenen o.b.v. kosten incl BTW + €2,99 verzendkosten - de korting
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 2.99 - korting);
        }
        else
        {
            //Totaal berekenen o.b.v. kosten incl BTW + €2,99 verzendkosten
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 2.99);  
        }
    }
}
alleKosten();

var korting;
//Kortingscode genegator
function kortingBerekenen(kortingscode)
{
    var randomGetal = [5, 10, 20, 35, 50, 0];

    //Random korting procent
    korting = randomGetal[Math.floor(Math.random() * randomGetal.length)]
    
    //Als je korting krijgt
    if(korting != 0 && kortingscode.value.length > 5)
    {
        //Het aantal aan de gebruiker laten zien
        document.getElementById("randomGetal").innerHTML = "U heeft een cadeaubon van: " + korting + " euro.";

        //Als je €5,- euro korting krijgt, 2 extra spaties zetten (om de + en - onder elkaar te houden)
        if(korting == 5)
        {
            document.getElementById("korting").innerHTML =  "-&nbsp;&nbsp;&nbsp;&nbsp;" + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(korting);
        }
        else
        {
            //Korting in het overzicht zetten
            document.getElementById("korting").innerHTML =  "-&nbsp;&nbsp;" + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(korting);
        }

        //Label groen maken
        document.getElementById("korting").style.color = "#4CA289";

        if(kosten > 100)
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 0 - korting);
        else
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 2.99 - korting);

        
        //Als de korting groter is dan de kosten incl. BTW
        if(korting > kosten)
        {
            //Functie opnieuw uitvoeren (anders heb je als totaalbedrag een negatief bedrag)
            kortingBerekenen(kortingscode);
        }

    }
    else
    {
        //Melding geven
        document.getElementById("randomGetal").innerHTML = "Vul een juiste kortingscode in."; //Er is geen geldige kortingscode ingevuld
        //Korting vullen met '0'
        document.getElementById("korting").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format("0");
        //Label zwart maken
        document.getElementById("korting").style.color = "#000000";

        if(kosten > 100 || kosten == 0)
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 0);
        else
            document.getElementById("totaleKosten").innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(kosten + 2.99);

    }
}
























//Checken of sportbidonnen in de winkelwagen zit
/*function toonSportbidon()
{
    // Als 'Sportbidon' in het winkelwagen zit
    if(document.getElementById("winkelmand") != null && sessionStorage.getItem("Sportbidon") != null)
    {
        document.getElementById("sportbidon").innerHTML = "<img id='sportbidon_Afbeelding'>";
        document.getElementById("sportbidon").innerHTML += "<h1 id='sportbidonTitel'></h1>";
        document.getElementById("sportbidon").innerHTML += "<p id='aantalSportbidon'></p>";
        document.getElementById("sportbidon").innerHTML += "<p id='sportbidon_Prijs'></p>";

        document.getElementById("sportbidonTitel").innerHTML = "Nike";
        document.getElementById("sportbidon_Afbeelding").src = sessionStorage.getItem("Sportbidon afbeelding");
        document.getElementById("aantalSportbidon").innerHTML = sessionStorage.getItem("Sportbidon");
        document.getElementById("sportbidon_Prijs").innerHTML = "Prijs<br>" + sessionStorage.getItem("Sportbidon prijs");
    }
    else
    {
        // Anders heel de section 'Sportbidon' verwijderen
        document.getElementById("sportbidon").remove();
    }
}

//Checken of FitBit in de winkelwagen zit
function toonFitBit()
{
    //Als 'Sportbidon'
}*/
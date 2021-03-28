//Initializer
function contact(geslacht, voornaam, email, mobielNummer, vraag, nieuwsbrief)
{
    this.geslacht = geslacht;
    this.voornaam = voornaam;
    this.email = email;
    this.mobielNummer = mobielNummer;
    this.vraag = vraag;
    this.nieuwsbrief = nieuwsbrief;
}

function formulier()
{
    var geslachtGekozen = document.getElementsByName("geslacht");

    //Properties vullen met het resultaat van de functie die als parameters zijn meegegeven
    contact(genderType(), naam(), emailAdres(), telefoonNummer(), vraagEnOpmerking(), aanmeldenNieuwsbrief());

    //Controleren of de verplichte velden zijn ingevuld (Properties checken) 
    if(this.geslacht != "" && this.voornaam != "" && this.email != "" && this.mobielNummer != "" && this.vraag != "")
    {
        //Formulier verwijderen
        var verwijderFormulier = document.getElementById("form")
        verwijderFormulier.parentNode.removeChild(verwijderFormulier);

        //Gegevens in een tabel tonen
        document.getElementById("bedanktBericht").innerHTML = "Bedankt voor het invullen van het contactformulier";
        document.getElementById("tabel").innerHTML += "<tr><td>Geslacht</td><td>" + this.geslacht + "</td></tr>";
        document.getElementById("tabel").innerHTML += "<tr><td>Naam</td><td>" + this.voornaam + "</td></tr>";
        document.getElementById("tabel").innerHTML += "<tr><td>E-mailadres</td><td>" + this.email + "</td></tr>";
        document.getElementById("tabel").innerHTML += "<tr><td>Telefoonnummer</td><td>" + this.mobielNummer + "</td></tr>";
        document.getElementById("tabel").innerHTML += "<tr><td>Vraag en opmerking</td><td>" + this.vraag + "</td></tr>";
        document.getElementById("tabel").innerHTML += "<tr><td>Aanmelden nieuwsbrief</td><td>" + this.nieuwsbrief + "</td></tr>";
    
        //Footer stylen
        document.getElementById("footer").style.position = "absolute";
        document.getElementById("footer").style.bottom = "-150px";    
    } 
}

//Geeft het gekozen geslacht in de variabelen 'geslacht' weer
function genderType()
{
    //Enum
    const geslacht = {Man: 'Man', Vrouw: 'Vrouw'};

    //Array list waar 'Man' en 'Vrouw' instaan waar je kunt kijken welke geslacht er is geselecteerd
    var geslachtGekozen = document.getElementsByName("geslacht");

    //Als je 'Man' selecteert
    if(geslachtGekozen[0].checked == true)
    {
        //Vullen met 'Man'
        this.geslacht = geslacht.Man;
    }
    //Als je 'Vrouw' selecteert
    else if(geslachtGekozen[1].checked == true)
    {
        //Vullen met 'Vrouw'
        this.geslacht = geslacht.Vrouw;
    }

    return this.geslacht;
}

//Geeft de ingevulde naam in de variabelen 'voornaam' weer
function naam()
{
    this.voornaam = document.getElementById("naam").value;

    return this.voornaam;
}

//Geeft het ingevulde E-mailadres in de variabelen 'email' weer
function emailAdres()
{
    this.email = document.getElementById("e-mailadres").value;

    return this.email;
}

//Geeft het ingevulde telefoonnummer in de variabelen 'mobielNummer' weer
function telefoonNummer()
{
    this.mobielNummer = document.getElementById("telefoonnummer").value;
    
    return this.mobielNummer;
}

//Geeft de ingevulde opmerking in de variabelen 'vraag' weer
function vraagEnOpmerking()
{
    this.vraag = document.getElementById("opmerking").value;

    return this.vraag;
}

//Geeft de aanmelding van de nieuwsbrief in de variabelen 'nieuwsbrief' weer
function aanmeldenNieuwsbrief()
{
    var aanmeldenNieuwsbrief = document.getElementById("nieuwsbrief").checked;

    if(aanmeldenNieuwsbrief == true)
    {
        this.nieuwsbrief = "Ja";
    }
    else if(aanmeldenNieuwsbrief == false)
    {
       this.nieuwsbrief = "Nee";
    }

    return this.nieuwsbrief;
}
// Début de l'étape sur l'entré du site

let userInput= parseInt(prompt("tapez 1 si vous êtes un homme \n tapez 2 si vous êtes une femme"))

let mainTitle=document.getElementById("MainTitle")
PubTitre(1);

function PubTitre(flag)
{
    if (flag==0)
    {
        mainTitle.innerHTML='<span style="color:red">Karim Benzema</span>'

        flag=1

    }

    else if ( userInput==1)
    {
        mainTitle.innerHTML=
        
        '<span style="color:blue">Bonjour Monsieur</span>' 

        flag=0
    }

    else

    {

        mainTitle.innerHTML='<span style="color:pink">Bonjour Madame</span>'

        flag=0

    }

    setTimeout(() => PubTitre(flag), 5000);


}

// fin de l'étape de l'entré du site


// Début de l'étape bouton

let myButton=document.getElementById("mon bouton")

myButton.addEventListener("click", function(){alert("Hello word")})

myButton.addEventListener("mouseover", function(){alert("bonne vaccance")})

// Fin de l'etape bouton


// Début de l'étape son

    document.getElementById("KB91image").addEventListener("click", function(){
        document.getElementById("audio1").play()});

    document.getElementById("KB92image").addEventListener("click", function(){
        document.getElementById("audio2").play()});
    
    document.getElementById("KB93image").addEventListener("click", function(){
        document.getElementById("audio3").play()});

// fin de l'étape son


// Début de l'étape publicité

        let pubUEFA=document.getElementById("pubUEFA")
       
        let pubPS5=document.getElementById("pubPS5")

        let pubAUDI=document.getElementById("pubAUDI")

        let innerHTMLPubUEFA=pubUEFA.innerHTML

        let innerHTMLPubPS5=pubPS5.innerHTML

        let innerHTMLPubAUDI=pubAUDI.innerHTML
       

        function PubImg (compteur)
        {
            if(compteur==0)
            {
                pubUEFA.innerHTML=innerHTMLPubUEFA
                pubPS5.innerHTML=""
                pubAUDI.innerHTML=""
            }
            else if (compteur==1)
            {
                pubPS5.innerHTML=innerHTMLPubPS5
                pubUEFA.innerHTML=""
                pubAUDI.innerHTML=""
            }
            else if(compteur==2)
            {
                pubAUDI.innerHTML=innerHTMLPubAUDI
                pubUEFA.innerHTML=""
                pubPS5.innerHTML=""
            }
            compteur++

            if (compteur==3)
            {
                compteur=0
            }

            setTimeout(() => PubImg(compteur), 5000);
        

        }
        
        PubImg(0)

// fin de l'étape publicité


// Début d'affichage de la date

let maintenant=new Date();
let jour=maintenant.getDate();
let mois=maintenant.getMonth()+1;
let an=maintenant.getFullYear();
document.write("Nous sommes le ",jour,"/",mois,"/",an,".");

// fin de la date


// Début du changement du couleur du body

let body=document.getElementById("Body")

function ChangeColor()
{
    if (body.style.background!="black")
    {
        body.style.background="black"
        body.style.color="white"
    }
    else 
    {
        body.style.background="white"
        body.style.color="black"
    }
}

    document.getElementById("changecolorBouton").addEventListener("click", ChangeColor)

// fin du changelent de couleur

// Début de l'étape rafraichissement de page




// let image1=document.getElementById("KB91image")

// image1.addEventListener("mousedown", 

// function lancer_son()
// {alert(Audio})


// Récupérer un élément :
// let nomVar = document.getElementById("IdDeMonElement")
// Manipuler l'élément :
// nomVar.Action() => exemple : nomVar.addEventListener("event",FonctionAppelée())



function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
const titre = ["Portrait de l'artiste","Autoportrait","Portrait de Juliette Courbet","Jeune mère","Alphonse Promayet","Le chien d'Ormans","Le chêne de flagey","La vague","La fille aux mouettes de Trouville","Combat de cerfs","Le renard dans la neige","Coucher de soleil sur le lac Léman"]
var title;
var images = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(images);
shuffle(images);
console.log(images);
var rand;
for (let i = 0;i<6;i++) {
    rand = Math.floor(Math.random() * images.length);
    images.splice(rand,1);
}
console.log(images);

var elem1 = document.createElement("img");
elem1.setAttribute("src","Images/"+images[0]+".jpg");
elem1.setAttribute("alt","img1");
document.getElementById("i1").appendChild(elem1);

var elem2 = document.createElement("img");
elem2.setAttribute("src","Images/"+images[1]+".jpg");
elem2.setAttribute("alt","img2");
document.getElementById("i2").appendChild(elem2);

var elem3 = document.createElement("img");
elem3.setAttribute("src","Images/"+images[2]+".jpg");
elem3.setAttribute("alt","img3");
document.getElementById("i3").appendChild(elem3);

var elem4 = document.createElement("img");
elem4.setAttribute("src","Images/"+images[3]+".jpg");
elem4.setAttribute("alt","img4");
document.getElementById("i4").appendChild(elem4);

var elem5 = document.createElement("img");
elem5.setAttribute("src","Images/"+images[4]+".jpg");
elem5.setAttribute("alt","img5");
document.getElementById("i5").appendChild(elem5);

var elem6 = document.createElement("img");
elem6.setAttribute("src","Images/"+images[5]+".jpg");
elem6.setAttribute("alt","img6");
document.getElementById("i6").appendChild(elem6);



$(document).ready(function (){
    $('.galery').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode:true,
        centerPadding: '50px',
        initialSlide: 0,
        variableWidth: true

    });
});

/*$('.galery').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
    switch(nextSlide){
        case 0:

            title = titre[images[0]];
            break;
        case 1:
            title = titre[images[1]];
            break;
        case 2:
            title = titre[images[2]];
            break;
        case 3:
            title = titre[images[3]];
            break;
        case 4:
            title = titre[images[4]];
            break;
        case 5:
            title = titre[images[5]];
            break;
        case 6:
            title = titre[images[6]];
            break;
        case 7:
            title = titre[images[7]];
            break;
        case 8:
            title = titre[images[8]];
            break;
        case 9:
            title = titre[images[9]];
            break;
        case 10:
            title = titre[images[10]];
            break;
        case 11:
            title = titre[images[11]];
            break;
        default:
            title = "Erreur";
    }
    console.log(titre[images[0]])
    var titreoeuvre = document.getElementById("titre");
    titreoeuvre.innerHTML= title;
});*/
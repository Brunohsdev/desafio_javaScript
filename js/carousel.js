
const div_carrosel = document.getElementById('carousel');
//carousel
const imagem_1 = document.createElement('img');
imagem_1.src = "img/imagem_1.jpg"
const imagem_2 = document.createElement('img');
imagem_2.src = "img/imagem_2.jpg"
const imagem_3 = document.createElement('img');
imagem_3.src = "img/imagem_3.jpg"

// let carouselArr = [];

// carouselArr.push(new Carousel("imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
// carouselArr.push(new Carousel("imagem_2.jpg","Ford a nossa história","#"));
// carouselArr.push(new Carousel("imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));
// Carousel.Start(carouselArr);
// //Array storage class


// //class Carousel
// class Carousel {

    
      
//     static Start(arr){
//         if(arr){

//             if(arr.length > 0){
//                 Carousel._sequence = 0;
//                 Carousel._size = arr.length;
//                 Carousel.Next(); //start
//                 Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
//             }
            
//         } else {
//             throw "Method Start need a Array Variable.";
//         }
//     }

//     static Next(){
        
//     }
// };
div_carrosel.appendChild(imagem_1);
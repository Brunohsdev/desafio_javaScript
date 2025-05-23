// const img1 = document.querySelector("img/XL Cabine.jpg");
// const img2 = document.querySelector("img/xls 2.2 diesel.jpg");
// const img3 = document.querySelector("img/storm.jpg");

//for table
const tabela = document.getElementById('compare');
const comparacao_img0 = document.getElementById('compare_image_0');
const comparacao_img1 = document.getElementById('compare_image_1');
const comparacao_modelo0 = document.getElementById('compare_modelo_0');
const comparacao_modelo1 = document.getElementById('compare_modelo_1');
const comparacao_altura0 = document.getElementById('compare_alturacacamba_0');
const comparacao_altura1 = document.getElementById('compare_alturacacamba_1');
const comparacao_altura_cacamba0 = document.getElementById('compare_alturacacamba_0');
const comparacao_altura_cacamba1 = document.getElementById('compare_alturacacamba_1');
const comparacao_altura_do_solo0 = document.getElementById('compare_alturasolo_0');
const comparacao_altura_do_solo1 = document.getElementById('compare_alturasolo_1');
const comparacao_capacidade_carga0 = document.getElementById('compare_capacidadecarga_0');
const comparacao_cacacidade_carga1 = document.getElementById('compare_capacidadecarga_1');
const comparacao_motor0 = document.getElementById('compare_motor_0');
const comparacao_motor1 = document.getElementById('compare_motor_1');
const compare_potencia_0 = document.getElementById('compare_potencia_0');
const compare_potencia_1 = document.getElementById('compare_potencia_1');
const compare_volumecacamba_0 = document.getElementById('compare_volumecacamba_0');
const compare_volumecacamba_1 = document.getElementById('compare_volumecacamba_1');

//car
class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
    //    this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
                
            
        } else {
          
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return 0;
    }
    else{
        tabela.setAttribute('display', 'block');

    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}

let carArr = [];
carArr.push(new Car("XL Cabine Simples 2.2 Diesel 4X4 MT 2022", 183.850, "0.511 m","1.816 m", "232 mm", "1.234 kg", "2.2 Turbo Diesel, 4 cilindros", 160,"1.800 litros (cabine simples)", "Aço 16 polegadas com pneus 255/70 R16" ));
carArr.push(new Car("Ranger XLS 2.2 Diesel 4x4 AT 2022", 220.690, "0.511 m","1.816 m", "232 mm", "1.096 kg", "Motor: 2.2 Turbo Diesel, 4 cilindros", 160 ,"1.800 litros (cabine simples)", "Liga leve 17 polegadas com pneus All Terrain 265/65 R17" ));
carArr.push(new Car("Ranger Storm 3.2 Diesel 4x4 AT 2022",  222.790, "0.511 m","1.849 m", "232 mm", "1.002 kg", "3.2 Turbo Diesel, 5 cilindros", 200,"1.800 litros (cabine simples)", " Liga leve 17 polegadas com pneus All Terrain 265/65 R17" ));


console.log(carArr);
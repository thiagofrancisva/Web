const palavra  = ["goblin","prietess","monk","nest","maiden","knight","elf","elder","bow","arrow","sword", "armor"];
const dica = ["small","healing","religious","litter","maid","armor","sprite","ancient","bend","shaft","blade","protect"];
//palavra.sort(function(){return 0.5 - Math.random()});
let palavra_copia = palavra.toSpliced(0,0);


const leitura = ["v","h","v","h","v"];
let palavra_leitura = [];
let indice_ref= [];

let palavra_escrita = [];
let letra_escrita = [];
let letra_quadro = [];
let letra_cruzada = [];
quadro_invalido = [];
let quadro_invalido_v = [];
let quadro_invalido_h = [];


/*teste
const palavra_escrita = ["maiden","goblin"];
const letra_quadro = [15,25,35,45,55,65,31,32,33,34,35,36];
const palavra_copia = ["prietess","monk","nest"];
const palavra_leitura = ["v","h"];
const letra_cruzada = [35];

console.log(letra_quadro);

*/



 for (let f = 0; f < 8 ;f++) { 

    if (palavra_copia.length == palavra.length){
       
         
         let indice = Math.floor(Math.random() * (palavra_copia.length - 1));
 
         palavra_escrita.push(palavra_copia[indice]);
         letra_escrita = palavra_escrita[0].split("");
         palavra_copia.splice(indice,1);
         
         palavra_leitura[palavra_leitura.length] = leitura[Math.floor(Math.random() * 4)];
        
         let quadro_inicial = 1050;



         if (palavra_leitura[0] == "v") {
                 
                quadro_invalido.push(quadro_inicial - 100);
                quadro_invalido.push(quadro_inicial + (letra_escrita.length - 1) * 100);

                 let w = 0;

                 while (w < letra_escrita.length){

                       letra_quadro.push(quadro_inicial);
                       quadro_invalido_v.push(quadro_inicial - 1);
                       quadro_invalido_v.push(quadro_inicial + 1);
                       quadro_inicial += 100;
                      

                 w++;
 
                 }
      
         } else { 
                   
                quadro_invalido.push(quadro_inicial - 1);
                quadro_invalido.push(quadro_inicial + (letra_escrita.length - 1));
         
                let w = 0;

                while (w < letra_escrita.length){

                      letra_quadro.push(quadro_inicial);
                      quadro_invalido_h.push(quadro_inicial - 100);
                      quadro_invalido_h.push(quadro_inicial + 100);
                      quadro_inicial++;

                w++;
                }       
       }
    indice_ref.push(0);

   } else {
     
     //console.log(palavra_copia);
     
     let indice_palavra_copia = [];
     let indice_palavra_escrita = [];

     let letra_cruzavel_quadro = [];
     let letra_cruzavel_qtd = [];
     let letra_quadro_copia = letra_quadro.toSpliced(0,0);
     let letra_indice = [];
     
     
     for (let s = 0; s < palavra_escrita.length; s++) {


  
         let palavra_analise = palavra_escrita[s].split("");

         let w = 0;
         

         let letra_quadro_analise = letra_quadro_copia.slice(indice_ref[s],                                                                         indice_ref[s] + palavra_escrita[s].length);

         //console.log(letra_quadro_analise);

         //letra_quadro_copia.splice(0,palavra_analise.length);

         //console.log(letra_quadro_copia);



  
         while (w < palavra_copia.length){
 
            let v = 0;
            let palavra_copia_analise = palavra_copia[w].split("");
             
            for (let i = 0; i < palavra_copia_analise.length; i++) { 
      


                if(palavra_leitura[s] == "v") {
                      if (palavra_analise.includes(palavra_copia_analise[i]) == true){
                            for(let a = 0;a < palavra_analise.length; a++){
                               
                                 if (palavra_copia_analise[i] == palavra_analise[a]
                                     && letra_cruzada.includes(letra_quadro_analise[a]) == false
                                     && quadro_invalido_h.includes(letra_quadro_analise[a]) == false) {
                                     
                                     let m = 0;
                                     let invalido = [];
       
                                     while (m < (i + 1) && invalido.includes(true) == false){
                                           
                                           let sub = letra_quadro_analise[a] - (i - m);
                                                
                                           if(letra_quadro.includes(sub) == true 
                                              && letra_escrita[(letra_quadro.indexOf(sub))]
                                              == palavra_copia_analise[(i-m)]){
                                           
                                           } else if (quadro_invalido.includes(sub) == true
                                               || quadro_invalido.includes(sub - 1) == true
                                               || letra_quadro.includes(sub - 1) == true
                                               || quadro_invalido.includes(sub + 100) == true
                                               || quadro_invalido.includes(sub - 100) == true
                                               || quadro_invalido_h.includes(sub + 100) == true
                                               || quadro_invalido_h.includes(sub - 100) == true){

                                               invalido.push(true);
                                               
                                           }
                                           m++;

                                     }
                                     while (m < palavra_copia_analise.length && invalido.includes(true) == false){
                                           
                                           let soma = letra_quadro_analise[a] + Math.abs(i - m);

                                           if(letra_quadro.includes(soma) == true 
                                              && letra_escrita[(letra_quadro.indexOf(soma))]
                                              == palavra_copia_analise[(m)]){
                                           
                                           } else if (quadro_invalido.includes(soma) == true
                                               || quadro_invalido.includes(soma + 1) == true
                                               || letra_quadro.includes(soma + 1) == true
                                               || quadro_invalido.includes(soma + 100) == true
                                               || quadro_invalido.includes(soma - 100) == true
                                               || quadro_invalido_h.includes(soma + 100) == true
                                               || quadro_invalido_h.includes(soma - 100)== true){
                                              
                                               invalido.push(true);
                                               
                                           }
                                           m++;

                                     }
                                     if (invalido.includes(true) == false){

                                        letra_indice.push(i);
                                        letra_cruzavel_quadro.push(letra_quadro_analise[a]);
                                        v++;
                                     }
 
                                 }
                            }  
                      
                                      
                  
                } } else if (palavra_leitura[s] == "h"){

                       if (palavra_analise.includes(palavra_copia_analise[i]) == true) {

                            for(let a = 0;a < palavra_analise.length; a++){
                             
                                if (palavra_copia_analise[i] == palavra_analise[a]
                                    && letra_cruzada.includes(letra_quadro_analise[a]) == false
                                    && quadro_invalido_v.includes(letra_quadro_analise[a]) == false){

                                     let m = 0;
                                     let invalido = [];
       
                                     while (m < (i + 1) && invalido.includes(true) == false){
                                           
                                           let sub = letra_quadro_analise[a] - (i - m) * 100;
                                                
                                           if(letra_quadro.includes(sub) == true 
                                              && letra_escrita[(letra_quadro.indexOf(sub))]
                                              == palavra_copia_analise[(i-m)]){
                                           
                                           } else if (quadro_invalido.includes(sub) == true
                                               || quadro_invalido.includes(sub - 100) == true
                                               || letra_quadro.includes(sub - 100) == true
                                               || quadro_invalido.includes(sub + 1) == true
                                               || quadro_invalido.includes(sub - 1) == true
                                               || quadro_invalido_v.includes(sub + 1) == true
                                               || quadro_invalido_v.includes(sub - 1) == true){

                                               invalido.push(true);
                                               
                                           }
                                           m++;

                                     }
                                     while (m < palavra_copia_analise.length && invalido.includes(true) == false){
                                           
                                           let soma = letra_quadro_analise[a] + Math.abs(i - m) * 100;

                                           if(letra_quadro.includes(soma) == true 
                                              && letra_escrita[(letra_quadro.indexOf(soma))]
                                              == palavra_copia_analise[(m)]){
                                           
                                           } else if (quadro_invalido.includes(soma) == true
                                               || quadro_invalido.includes(soma + 100) == true
                                               || letra_quadro.includes(soma + 100) == true
                                               || quadro_invalido.includes(soma + 1) == true
                                               || quadro_invalido.includes(soma - 1) == true
                                               || quadro_invalido_v.includes(soma + 1) == true
                                               || quadro_invalido_v.includes(soma - 1)== true){
                                              
                                               invalido.push(true);
                                               
                                           }
                                           m++;

                                     }
                                     if (invalido.includes(true) == false){

                                        letra_indice.push(i);
                                        letra_cruzavel_quadro.push(letra_quadro_analise[a]);
                                        v++;
                                     } 
                                     
                                 }  
                                 
                            }
                     }
                             
                  
                }
            }

            //console.log(v)
            if (v != 0 ) {
            indice_palavra_copia[indice_palavra_copia.length] = w;
            indice_palavra_escrita[indice_palavra_escrita.length] = s;
            letra_cruzavel_qtd[letra_cruzavel_qtd.length] = v; }
             
            
             
             w++;

           
             
        }
    }           /*    
                console.log(" letra_indice: " + letra_indice +
                   " letra_cruzavel_quadro: " + letra_cruzavel_quadro + 
                   " indice_palavra_copia: " + indice_palavra_copia +
                   " indice_palavra_escrita: " + indice_palavra_escrita +
                   " letra_cruzavel_qtd: " + letra_cruzavel_qtd);
                */



   if (letra_cruzavel_qtd[0] == undefined) {
       /*
       console.log(palavra_copia = palavra.toSpliced(0,0));
       console.log(palavra_leitura = []);
       console.log(palavra_escrita.splice[0,palavra_escrita.length]);
       console.log(letra_escrita.splice[0,palavra_escrita.length]);
       console.log(letra_quadro.splice[0,letra_quadro.length]);
       console.log(letra_cruzada.splice[0,letra_cruzada.length]);
       */

       palavra_copia = palavra.toSpliced(0,0);
       palavra_leitura = [];
       palavra_escrita = [];
       letra_escrita= [];
       letra_quadro = [];
       letra_cruzada = [];
       quadro_invalido = [];
       quadro_invalido_v = [];
       quadro_invalido_h = [];
       indice_ref = [];
       f -= f + 1;
       

      } else {

                let indice = Math.floor(Math.random() * ( indice_palavra_copia.length - 1));
                
                
                let w = 0;
                let antes = 0;
                let depois = 0;

                while (w < indice){
                       antes +=  letra_cruzavel_qtd[w];
                       w++
                }
    
                while (w < (letra_cruzavel_qtd.length)){
                      depois +=  letra_cruzavel_qtd[w];
                      w++
                }

                letra_cruzavel_quadro.splice(0,antes);
                letra_cruzavel_quadro.splice((letra_cruzavel_qtd[indice]),Math.abs((depois-letra_cruzavel_qtd[indice]))); 
                letra_indice.splice(0,antes);
                letra_indice.splice((letra_cruzavel_qtd[indice]),Math.abs((depois-letra_cruzavel_qtd[indice]))); 
  
              


/*
console.log(palavra_copia[indice_palavra_copia[indice]]);
console.log(palavra_escrita[indice_palavra_escrita[indice]]);
console.log(letra_cruzavel_qtd[indice]);
*/

      let indice_cruzavel = Math.floor(Math.random() * (letra_cruzavel_quadro.length - 1));
      let palavra_cp_cruzavel = palavra_copia[indice_palavra_copia[indice]].split("");

       

   if (palavra_leitura[indice_palavra_escrita[indice]] == "v"){

   
       
       let m = 0;
       quadro_invalido.push((letra_cruzavel_quadro[indice_cruzavel]- (1 + letra_indice[indice_cruzavel] - m)));
       quadro_invalido.push(letra_cruzavel_quadro[indice_cruzavel]+ Math.abs(letra_indice[indice_cruzavel] -                              palavra_cp_cruzavel.length));

       while (m < (letra_indice[indice_cruzavel] + 1)){
          let sub = letra_cruzavel_quadro[indice_cruzavel]- (letra_indice[indice_cruzavel] - m);
          letra_quadro.push(sub);
          quadro_invalido_h.push((sub - 100));
          quadro_invalido_h.push((sub + 100));
          letra_escrita.push(palavra_cp_cruzavel[m]);
          m++;

       }

       while (m < palavra_cp_cruzavel.length){
          let soma = letra_cruzavel_quadro[indice_cruzavel] + (Math.abs((letra_indice[indice_cruzavel] - m)));
          letra_quadro.push(soma);
          quadro_invalido_h.push((soma - 100));
          quadro_invalido_h.push((soma + 100));
          letra_escrita.push(palavra_cp_cruzavel[m]);
          m++;

       }

       letra_cruzada.push(letra_cruzavel_quadro[indice_cruzavel]);
       palavra_leitura.push("h");
       palavra_escrita.push(palavra_copia[indice_palavra_copia[indice]]);
       palavra_copia.splice(indice_palavra_copia[indice],1);

    }  else if (palavra_leitura[indice_palavra_escrita[indice]] == "h"){
         
  
       
       let m = 0;
       quadro_invalido.push((letra_cruzavel_quadro[indice_cruzavel]- (1 + letra_indice[indice_cruzavel] - m) * 100));
       quadro_invalido.push(letra_cruzavel_quadro[indice_cruzavel]+ Math.abs(letra_indice[indice_cruzavel] -                                            palavra_cp_cruzavel.length) * 100);

       while (m < (letra_indice[indice_cruzavel] + 1)){
          let sub = letra_cruzavel_quadro[indice_cruzavel]- ((letra_indice[indice_cruzavel] - m) * 100);
          letra_quadro.push(sub);
          quadro_invalido_v.push((sub - 1));
          quadro_invalido_v.push((sub + 1));
          letra_escrita.push(palavra_cp_cruzavel[m]);
          m++;

       }

       while (m < palavra_cp_cruzavel.length){
          let soma = letra_cruzavel_quadro[indice_cruzavel] + (Math.abs((letra_indice[indice_cruzavel] - m)) * 100);
          letra_quadro.push(soma);
          quadro_invalido_v.push((soma - 1));
          quadro_invalido_v.push((soma + 1));
          letra_escrita.push(palavra_cp_cruzavel[m]);
          m++;

       }
        
       
        
        letra_cruzada.push(letra_cruzavel_quadro[indice_cruzavel]);
        palavra_leitura.push("v");
        palavra_escrita.push(palavra_copia[indice_palavra_copia[indice]]);
        palavra_copia.splice(indice_palavra_copia[indice],1);
    }
    indice_ref.push((palavra_escrita[palavra_escrita.length-2].length)+(indice_ref[palavra_escrita.length-2]));
    /*
    console.log( palavra_escrita);
    console.log( letra_cruzada);
    console.log( letra_quadro);
    console.log( letra_escrita); 
    console.log(palavra_leitura);
    */
}}}

let quadro_copia = letra_quadro.toSpliced(0,0);
let linha = [];
let linha_inicio = 999;
let linha_fim = 0;
let sub_linha = 200;
let coluna = [];
let coluna_inicio = 2000;
let sub_coluna = 0;
let coluna_fim = 0;

for (let i = 0; i < palavra_escrita.length; i++){
     
    let quadro_analise = quadro_copia.toSpliced(palavra_escrita[i].length,quadro_copia.length - palavra_escrita[i].length);
    quadro_copia.splice(0,palavra_escrita[i].length);

    if (palavra_leitura[i] == "v") {
      
            if ( Math.floor(quadro_analise[0] / 100) <= Math.floor(coluna_inicio / 100) 
                && quadro_analise[0] < coluna_inicio){

                coluna_inicio = quadro_analise[0];
                sub_coluna = 100 * Math.floor(quadro_analise[0] / 100)
            }
            if ( Math.floor(quadro_analise[quadro_analise.length-1] / 100) >= 
                 Math.floor(coluna_fim / 100) && quadro_analise[quadro_analise.length-1] > coluna_fim){

                coluna_fim = quadro_analise[quadro_analise.length-1];
            }
   }

}   


let quadro_copia_inicio = letra_quadro.toSpliced(0,0);

for (let i = 0; i < palavra_escrita.length; i++){

    
    let quadro_analise = quadro_copia_inicio.toSpliced(palavra_escrita[i].length,quadro_copia_inicio.length - palavra_escrita[i].length);
    quadro_copia_inicio.splice(0,palavra_escrita[i].length);

    if (palavra_leitura[i] == "h") {
        if  (
              (quadro_analise[0]) % 100 - sub_linha <= 0 && (quadro_analise[0]) % 100!= 0
                       
                 ){

                linha_inicio = quadro_analise[0];
                sub_linha = (quadro_analise[0] - sub_coluna) % 100;
       
    } }
} 

let quadro_copia_fim = letra_quadro.toSpliced(0,0);

for (let i = 0; i < palavra_escrita.length; i++){

    
    let quadro_analise = quadro_copia_fim.toSpliced(palavra_escrita[i].length,quadro_copia_fim.length - palavra_escrita[i].length);
    quadro_copia_fim.splice(0,palavra_escrita[i].length);

    if (palavra_leitura[i] == "h") {
        
              if ((quadro_analise[quadro_analise.length-1]-sub_linha) %100 
                   > (linha_fim -sub_linha) %100 
                     
                 ){

                linha_fim = quadro_analise[quadro_analise.length-1];
            }
       
    }
} 


/*
console.log("linha : " + linha);
console.log("linha : " + linha_inicio + " - " + linha_fim);
console.log("coluna : " + coluna);
console.log("coluna : " + coluna_inicio + " - " + coluna_fim);
console.log(palavra_escrita[0].length);
*/


for (let i = 0 ; i < letra_quadro.length; i++){
    
     letra_quadro.splice(i,1,(letra_quadro[i] - sub_linha - sub_coluna)%100 + 
                             (Math.floor((letra_quadro[i] - sub_linha - sub_coluna) / 100)) *20);

}

//console.log(letra_quadro);




let matriz_y = Math.ceil((coluna_fim - sub_linha - sub_coluna)/100);

let matriz_x = ((linha_fim - sub_linha - sub_coluna))%100;

/*
console.log(matriz_y);
console.log(matriz_x);
*/

let espaco = "<br><br>";

for (let i = 0 ;i < matriz_y ;i++) {
     
     let soma = 20 * i;
     for(let v = 0; v < matriz_x + 1;v++){
         
         let id = (soma + v).toString();
        
         espaco += "<input type=\"text\" class=\"linha\" id=\""+ id +"\" maxlength=\"1\" oninput=\"pular(" + (soma + v) + ")\" onclick=\"limpar(" + (soma + v) + ")\"disabled>";
     }
     
     espaco+="<br>";
     
}

document.getElementById("quadro").innerHTML= espaco;

let abilitado = [];

for (let i = 0; i < letra_quadro.length; i++){
    
   document.getElementById(letra_quadro[i].toString()).style.background= "white";
   document.getElementById(letra_quadro[i].toString()).style.border= "1px solid black";
   document.getElementById(letra_quadro[i].toString()).style.opacity= "0.8";
   document.getElementById(letra_quadro[i].toString()).disabled = false;
   abilitado.push(letra_quadro[i]);
}


/*for (let i = 0; i < palavra_escrita.length; i++){
    let selecionada = letra_quadro.slice(indice_ref[i],indice_ref[i]+palavra_escrita[i].length);
    if (palavra_leitura[i] == "v"){
       for (let v = 0;v < selecionada.length; v++){
            abilitado.push(selecionada + "v");
       }
    } else if (palavra_leitura[i] == "h"){
       for (let h = 0;h < selecionada.length; h++){
            abilitado.push(selecionada + "h");
       }
    }
    
}*/
document.getElementById("quadro").innerHTML+= "<h1>CLUES</h1> <div class=\"ul\">  <ul id=\"dica\" class=\"dica\"></ul>";

let dica_lista = "";
for (let i = 0; i < palavra_escrita.length;i++){
     dica_lista+= "<div class=\"li\"><li id=\"li"+i+"\">"+ dica[palavra.indexOf(palavra_escrita[i])]+"</li></div>";
     
}
document.getElementById("dica").innerHTML= dica_lista + "</div><br><br><br><br>";

/*const indice_ref =[0,palavra_escrita[0].length];
for (let i = 2; i < palavra_escrita.length; i++){
    indice_ref.push(palavra_escrita[i-1].length + indice_ref[i-1]);
    
}*/
//console.log(indice_ref);

window.setInterval(teste,1000);

//teste();

let quadro_anterior = -1;
let focavel = -1;

function limpar(quadro){
    if (abilitado.includes(quadro) != false){
              document.getElementById(quadro.toString()).value= "";
        }
    
}

function pular(quadro) {

/*if (focavel == -1){
    if (quadro - quadro_anterior== 20) {
       focavel = quadro + 1;
    } else if (quadro - quadro_anterior== 1) {
       focavel = quadro + 1;
      }
}*/

if (abilitado.includes(20 + quadro) == true
    && quadro - quadro_anterior== 20) {
      
   if (abilitado.includes(20 + quadro) != false){
              document.getElementById((20 + quadro).toString()).value= "";
           }
   /*if (abilitado.includes(20 + quadro) == false && abilitado.includes(40 + quadro)) {   
                
                 document.getElementById((40 + quadro).toString()).focus();
                 quadro_anterior = quadro + 20;
   } else { */
       document.getElementById((20 + quadro).toString()).focus();
       quadro_anterior = quadro;
   //}

} else if (abilitado.includes(1 + quadro) == true
           && quadro - quadro_anterior== 1) {

           if (abilitado.includes(1 + quadro) != false){
              document.getElementById((1 + quadro).toString()).value= "";
           }
           
           /*if (abilitado.includes(1 + quadro) == false && abilitado.includes(2 + quadro)){
                     
                      document.getElementById((2 + quadro).toString()).focus();
                     quadro_anterior = quadro + 1;     
             }else { */
           document.getElementById((1 + quadro).toString()).focus();
           quadro_anterior = quadro;
          //}

  } else if (quadro_anterior == -1 || quadro_anterior != -1) {
             if (abilitado.includes(20 + quadro) == false && abilitado.includes(40 + quadro)) {   
                 document.getElementById(( 40+ quadro).toString()).value= "";
                 document.getElementById((40 + quadro).toString()).focus();
                 quadro_anterior = quadro + 20;
             } else if (abilitado.includes(1 + quadro) == false && abilitado.includes(2 + quadro)){
                      document.getElementById((2 + quadro).toString()).value= "";
                      document.getElementById((2 + quadro).toString()).focus();
                      quadro_anterior = quadro + 1;     
             }
             if (abilitado.includes(20 + quadro)) {
                 document.getElementById((20 + quadro).toString()).value= "";   
                 document.getElementById((20 + quadro).toString()).focus();
                 quadro_anterior = quadro;
             } else if (abilitado.includes(1 + quadro)){
                      document.getElementById((1 + quadro).toString()).value= "";
                      document.getElementById((1 + quadro).toString()).focus();
                     quadro_anterior = quadro;     
             }

  }

}



function teste() {

   for (let i = 0;i < palavra_escrita.length; i++){
         
        
        let certo = true;
         
         
        let letra_palpite = "";
        for(let l = 0;l < palavra_escrita[i].length;l++){
            
            let indice = l + indice_ref[i];
             //console.log(indice.toString());    
            letra_palpite = document.getElementById(letra_quadro[indice].toString()).value;
            
            
            if(letra_palpite.toLowerCase()!= letra_escrita[indice] ){

              certo = false;
              break;
            } 
        }
       
        if (certo == true ){
            for(let l = 0;l < palavra_escrita[i].length;l++){

             document.getElementById(letra_quadro[(indice_ref[i]+l)]).style.background= "green";
             document.getElementById(letra_quadro[(indice_ref[i]+l)]).style.color= "white";
             document.getElementById(letra_quadro[(indice_ref[i]+l)]).disabled = true;
             document.getElementById(letra_quadro[(indice_ref[i]+l)]).value = letra_escrita[(indice_ref[i]+l)];
             abilitado[indice_ref[i]+l] = false;
             abilitado[abilitado.indexOf(letra_quadro[indice_ref[i]+l])] = false;

            }
            document.getElementById(("li"+i)).style.color= "green";
            /*for (let f = 0; f < indice_ref.length;f++){
                if (abilitado[indice_ref[f]] != false ){
   
                document.getElementById(letra_quadro[indice_ref[f]].toString()).focus();
                quadro_anterior = -1;
                break;
                }
            } */
        } 
            
            
        

   }
   
}
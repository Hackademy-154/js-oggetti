// // Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

// // mostrare tutti i contatti dell’agenda
// // mostrare un singolo contatto
// // eliminare un contatto dall’agenda
// // aggiungere un nuovo contatto
// // modificare un contatto esistente  




// let rubrica = {
//     'contacts' :[
//         {'nome': 'Luca', 'telefono': '3331111111'},
//         {'nome':'manuel','telefono':'3332222222'},
//         {'nome':'Rebecca','telefono':'333222222'},
//         {'nome':'Lucia','telefono':'2537289100'}

// ],

// showContacts : function (){
//     this.contacts.forEach( (contact)=> console.log(contact)
    
//     )

// }, 
// showOneContact : function (name) {
//     let filtered = this.contacts.filter(contact => contact.nome == name)
//     if (filtered.length > 0) {
//         console.log(filtered[0]);
        
//     }else{
//         console.log('il contatto non é presente in rubrica');
        
//     }
// },

// 'eliminaContatto' : function (nome) {
//     let mapped = this.contacts.map(contact => contact.nome)
//     console.log(mapped);
    
//     let index = mapped.indexOf(nome);
    
    
//     if (index>=0){
//         console.log(`il contatto ${nome} é stato eliminato`);
//         this.contacts.splice(index, 1)
//     }else{
//         console.log(`il contatto ${nome} non esiste`);
        
//     }
    
// },

// 'aggiungiContatto' : function (nome) {
//     this.contacts.push(nome)
//     console.log(`il contato ${nome} é stato aggiunto`);
    
// },

// 'modificaContatti' : function (nome) {
//     let index = this.contacts.indexOf(nome);
//     console.log(index);
    

    
    
// },







// }



// console.log(rubrica);
// rubrica.showContacts();
// rubrica.showOneContact('Luca');
// rubrica.eliminaContatto('Manuel');
// console.log(rubrica);
// rubrica.aggiungiContatto('Clelia');
// rubrica.modificaContatti();






// Crea un oggetto bowling con le seguenti caratteristiche:

// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore



// let bowling = {
//     players : [
//         { name : 'roberto', scores: []},
//         { name : 'francesca', scores: []},
//         { name : 'gennaro', scores: []},
//         { name : 'marco', scores: []}
//     ],

    

//     setFinalScore : function () {
        
//          this.players.forEach( (player)=>{
//             player.finalScore = player.scores.reduce( (acc,n)=>acc+n, 0);

//          } )

//     },

    

//     setScores : function (numeroTiri) {

//         this.players.forEach( (player)=>{

//             for (let i = 0; i < numeroTiri ; i++) {

//             player.scores.push(Math.floor(Math.random() *11)) 

//             }
            

//         } )
        
//     },

    

//     setWinner : function (){
//         this.players.sort((a,b)=> b.finalScore - a.finalScore );
        


//         let winner = this.players[0]; 
        
//         if (winner.finalScore > this.players[1].finalScore  ) {
//             console.log(`il vincitore é ${winner.name} `);
            
//         } else{
//             console.log(`i giocatori ${winner.name} e ${this.players[1].name} hanno pareggiato`);
            
//         }
        

        
//     },



   

//     setRank : function(){

//         console.log('classifica finale:');
//         this.players.forEach( (player, i)=>{
//             console.log(`${i+1}. ${player.name}`);
            
//         })
        
//     },

   

//     setSurnam : function (...surname){
//         this.players.forEach( (player,i)=>{
//             player.surname = surname[i]
//         })
        
//     },



// }


// console.log(bowling);
// bowling.setSurnam('puppo','felici','coduti','versi');
// bowling.setScores(1);
// bowling.setFinalScore();
// bowling.setWinner();
// bowling.setRank();
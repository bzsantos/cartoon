function bd() {
    let data = [
                  {id:1, nome:"John Wick", login:"wick", senha:"1234", email:"wick@ig.com"}, //0
                  {id:2, nome:"Bruno Wick", login:"bwick", senha:"1234@", email:"bwick@ig.com"}, //1
                  {id:3, nome:"Serebro Wick", login:"serebro", senha:"serebro@", email:"serebro@ig.com"} //2
               ]

    let json = JSON.stringify(data)
    
    localStorage.setItem("meubanco", json)
   
   return json
}

function adicionar() {
   let banco = JSON.parse(localStorage.getItem("meubanco"))

  

   alert("testew")

   let ids = Date.now()
   let nome = document.querySelector("#nome").value 
   let lg = document.querySelector("#login").value
   let sn = document.querySelector("#senha").value
   let mail = document.querySelector("#email").value


   let cad = {id:ids, nome:nome, login:lg, senha:sn, email:mail}

   banco.push(cad)
   
   let json = json.stringify(banco)

   localStorage.setItem("meubanco", json)

   alert(json)


}

//const dados = bd()

//console.log(dados)

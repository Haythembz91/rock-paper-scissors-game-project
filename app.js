document.addEventListener("DOMContentLoaded",()=>{
    alert('Take a pick then hit Play!')

    const arrayPicks = ["Rock","Paper","Scissors"]
    const myPick = document.querySelector(".myPick")
    const compPick = document.querySelector('.CompPick')
    const picks = document.querySelectorAll(".pick")
    const submit = document.querySelector('.submit')
    const result = document.querySelector('.result')
    const myScore = document.querySelector('.myScore')
    const pcScore = document.querySelector('.pcScore')
    const reset= document.querySelector('.reset')
    let myscore=0
    let pcscore=0
    class rockPaperScissors {
        constructor(myPick, compPick){
            this.myPick = myPick
            this.compPick =compPick
        }

        userPick(){
            for (let i=0;i<picks.length;i++){
                picks[i].addEventListener('click',()=> {
                    
                    myPick.innerHTML = arrayPicks[i]
                })
            }
        }
        computerPick (){
            submit.addEventListener('click',()=>{
                if(myPick.innerHTML !==""){
                    
                compPick.innerHTML = arrayPicks[Math.floor(Math.random()*arrayPicks.length)]
                
           game.result() 

            }})

        }
        result(){
            if (compPick.innerHTML === myPick.innerHTML){
                result.innerHTML = "It's a draw!"
                            }
            else if(myPick.innerHTML ==='Rock' && compPick.innerHTML ==='Paper'){
                result.innerHTML ="You lost!"
                pcscore++
                pcScore.innerHTML = pcscore
                
            }
            else if(myPick.innerHTML ==='Rock' && compPick.innerHTML ==='Scissors'){
                result.innerHTML ="You win!"
                myscore++
                myScore.innerHTML = myscore
            } 
            else if (myPick.innerHTML==="Paper") {
                if(compPick.innerHTML==="Rock") {
                    result.innerHTML = 'You win!'
                    myscore++
                    myScore.innerHTML = myscore
                } else{
                    result.innerHTML="You lost"
                    pcscore++
                    pcScore.innerHTML = pcscore
                }
            }
           else if (myPick.innerHTML==="Scissors") {
                if(compPick.innerHTML==="Rock") {
                    result.innerHTML = 'You lost!'
                    pcscore++
                    pcScore.innerHTML = pcscore
                } else{
                    result.innerHTML="You win"
                    myscore++
                    myScore.innerHTML = myscore
                }
            }           
        }
        
        clear(){
            picks.forEach(item=>item.addEventListener('click',()=>{
            compPick.innerHTML= ""
            result.innerHTML=''
        }))
        }
    }

    let game = new rockPaperScissors(myPick,compPick)

    game.userPick()
    game.clear()
    game.computerPick()

    reset.addEventListener("click",() => {
        myscore=0
        pcscore=0
        myScore.innerHTML ="0"
        pcScore.innerHTML ="0"
    })
    
    



    
    









})
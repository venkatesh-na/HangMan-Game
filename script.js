const alp_buttons_container = document.querySelector(".alp_buttons_container")
const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","x","Y","Z"]
const data = {
   Fruits :["MANGO","APPLE","BANANA"],
   Animals:[],
   Countries:[]
}
const categories = document.querySelectorAll(".button-container button")
const wordShow = document.querySelector(".word_show")
const main = document.querySelector("main")

let word;

alp_buttons_container.innerHTML =  alphabets.map(alp=>`<button>${alp}</button>`).join("")

categories.forEach(btn=>{
    //select categories
    btn.addEventListener("click",(e)=>{
        document.querySelector(".user_input_section").classList.remove("hide")
        btn.classList.add("active")
        categories.forEach(e=>e.setAttribute("disabled","true"))
        word = data[e.target.dataset.id]
        word = word[Math.floor(Math.random() * word.length)]
        for(let i = 0; i<word.length; i++){
            const div = document.createElement("div")
            div.classList.add("char")
            wordShow.appendChild(div) 
        }

        console.log(word) // "APPLE"
        let string = word 
        word = []
        for(let i = 0; i<string.length; i++){
            word.push({ letter : string[i] , index : i , checked: false})
        }

        function find(arr,char){
            let index = -1
            for(let i = 0; i<arr.length; i++){
                if(arr[i].letter === char && arr[i].checked === false){
                    arr[i].checked = true
                    index = i
                    break;
                }
            }
            return index;
        }

        function isCorrect(word){
            for(let i = 0; i<word.length; i++){
                if(!word[i].checked){
                    return false;
                }
            }
            return true;
        }
       
        //matching selected word
        let allAlpButtons = document.querySelectorAll(".alp_buttons_container button")
        allAlpButtons = [...allAlpButtons]
        for(let i = 0; i<allAlpButtons.length; i++){
            allAlpButtons[i].addEventListener("click",(e)=>{
                let index = find(word,e.target.textContent)
                if(isCorrect(word)){
                   main.innerHTML = `<div class = "message"><h3 class = "success">You won</h3><p>The word is ${string}</p></div>` 
                }
                console.log(index)
                // let index = word.indexOf(e.target.textContent)
                if(index != -1){
                    let allDiv = document.querySelectorAll(".word_show > div")
                    allDiv = Array.from(allDiv)
                    allDiv[index].textContent = e.target.textContent
                    let count  = 0
                    allDiv = document.querySelectorAll(".word_show > div")
                    allDiv = [...allDiv]
                    allDiv.forEach(a=>{
                        if(a.textContent) count++;
                    })
                    let calPer = ((count/allDiv.length)  * 100).toFixed(2)
                    console.log(calPer)

                    if(calPer > 16.66 && calPer <= 16.66 * 2){
                        const head = document.querySelector(".head")
                        head.classList.add("show")
                        const body = document.querySelector(".body")
                        body.classList.add("show")
                    }
                     if(calPer > 16.66 * 2 && calPer <= 16.66 * 3){
                        const leftHand = document.querySelector(".leftHand")
                        leftHand.classList.add("show")
                    }
                     if(calPer > 16.66 * 3 && calPer <= 16.66 * 4){
                        const rightHand = document.querySelector(".rightHand")
                        rightHand.classList.add("show")
                    }
                     if(calPer > 16.66 * 4 && calPer <= 16.66 * 6){
                        const leftLeg = document.querySelector(".leftLeg")
                        leftLeg.classList.add("show")
                    }
                    if(calPer > 16.66 * 6){
                         const rightLeg = document.querySelector(".rightLeg")
                         console.log(rightLeg)
                        rightLeg.classList.add("show")
                    }

                } else {
                   main.innerHTML = `<div class = "message"><h3 class = "failure">You Loose</h3><p>The word is ${string}</p></div>`
                }
            })
        }

    })
})



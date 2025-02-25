function display(){
    const display = document.getElementById("display")
    const buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText

            if (value === "="){
                try{
                    display.value = eval(display.value.replace("×", "*").replace("÷", "/"))
                } catch{
                    display.value = "Error"
                }
            } else if (value === "AC"){
                display.value = ""
            } else if (value === "%"){
                display.value = parseFloat(display.value / 100)
            } else{
                display.value += value
            }
        })
    })
}
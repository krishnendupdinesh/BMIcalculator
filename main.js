function calculateBMI(){
    let h = document.getElementById("heig").value;
    let w = document.getElementById("weig").value;

    let height = parseFloat(h)/100;
    let weight = parseFloat(w);

    let ansBox = document.querySelector(".ans")
    let commentBox = document.querySelector(".comment")
    let tipBox = document.querySelector(".tips")

    if(height>0 && weight>0){
        let bmi = weight/(height*height);
        
        ansBox.textContent=bmi.toFixed(2);

        if(bmi<18.5){
            commentBox.textContent = "Underweight";
            commentBox.style.color = "#5d8fdbff";
            tipBox.style.whiteSpace = "pre-line";
    tipBox.textContent = 
        "→ Eat more nutrient-dense foods\n" +
        "→ Include proteins\n" +
        "→ Add healthy fats\n" +
        "→ Consider strength training";
        }else if(bmi<24.9){
            commentBox.textContent = "Normal";
            commentBox.style.color = "#4B8A5c";
            tipBox.style.whiteSpace = "pre-line";
    tipBox.textContent = 
        "→ Maintain a balanced diet\n" +
        "→ Exercise regularly\n" +
        "→ Stay hydrated";
        }else if(bmi<29.9){
            commentBox.textContent = "Overweight";
            commentBox.style.color = "#EDA946";
            tipBox.style.whiteSpace = "pre-line";
    tipBox.textContent = 
        "→ Reduce sugar and processed foods\n" +
        "→ Eat more fruits and vegetables\n" +
        "→ Exercise regularly";
        }else{
            commentBox.textContent = "Obese";
            commentBox.style.color = "#81301aff";
            tipBox.style.whiteSpace = "pre-line";
    tipBox.textContent = 
        "→ Consult a doctor or nutritionist\n" +
        "→ Follow a balanced diet\n" +
        "→ Include daily physical activity";

        }
    }else{
        ansBox.textContent = "00.00"
        commentBox.textContent = "Not Valid"
    }
}




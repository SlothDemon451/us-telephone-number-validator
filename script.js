const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

checkBtn.addEventListener("click", ()=>{
  if(!input.value){
    alert("Please provide a phone number")
  }else{
    regex.test(input.value) ? result.innerText = `Valid US number: ${input.value}` : result.innerText = `Invalid US number: ${input.value}` 
  }
})

clearBtn.addEventListener("click", ()=>{
  result.innerText = ""
})


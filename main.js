function myalertP(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) + parseInt(num2)
    document.getElementById("result").innerHTML = "แสดงผลรวม : " + sum
    alert(sum)
}

function myalertM(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) - parseInt(num2)
    document.getElementById("result").innerHTML = "แสดงผลลบ : " + sum
    alert(sum)
}

function myalertD(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) * parseInt(num2)
    document.getElementById("result").innerHTML = "แสดงผลคูณ : " + sum
    alert(sum)
}

function myalertDiv(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) / parseInt(num2)
    document.getElementById("result").innerHTML = "แสดงผลหาร : " + sum
    alert(sum)
}

function myalertBMI(){
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var sum = parseInt(num1) / ((parseInt(num2)/100)*(parseInt(num2)/100))
    document.getElementById("result").innerHTML = "แสดงผลBMI : " + sum
    alert(sum)
}

function myalert() {
    alert("Hello world")
}

const img = document.createElement("img")

img.src = "img/me.jpg"
img.style.width = "200px"

document.getElementById("mydiv").appendChild(img)
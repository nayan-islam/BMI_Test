let height = document.querySelector("#height");
let height_erorr = document.querySelector(".height_erorr");
let weight = document.querySelector("#weight");
let weight_erorr = document.querySelector(".weight_erorr");
let btn = document.querySelector(".submit");
let result = document.querySelector(".result");
let massage = document.querySelector(".massage");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let dark = document.querySelector(".dark");

btn.addEventListener("click", function () {
  if (height.value == "") {
    height_erorr.innerHTML = "Please enter your height!";
    height_erorr.style.color = "#ae0000";
    height_erorr.style.bottom = "-14px";
  } else {
    height_erorr.innerHTML = "";
  }
  if (weight.value == "") {
    weight_erorr.innerHTML = "Please enter your height!";
    weight_erorr.style.color = "#ae0000";
    weight_erorr.style.bottom = "-14px";
  } else {
    weight_erorr.innerHTML = "";
  }

  if (!weight.value == "" && !height.value == "") {
    let bmi =
      ((weight.value * 2.20462) / (height.value * 12 * (height.value * 12))) *
      703;
    result.innerHTML = `BMI Result: <span class=\"point\">${bmi.toFixed(
      2
    )}</span>`;
    let point = document.querySelector(".point");
    if (bmi < 18.5) {
      massage.innerHTML = "Underweight- You need to gain weight";
      point.style.color = "red";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      massage.innerHTML = "Healthy Weight- You are perfect";
    } else {
      massage.innerHTML = "Healthy Weight- You need to lose weight";
      point.style.color = "red";
    }
  }
});

function reload() {
  window.location.reload();
}

sun.addEventListener("click", function () {
  dark.setAttribute("href", "css/light.css");
  sun.style.display = "none";
  moon.style.display = "block";
});

moon.addEventListener("click", function () {
  dark.setAttribute("href", "css/dark.css");
  moon.style.display = "none";
  sun.style.display = "block";
});

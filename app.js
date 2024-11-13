let button = document.querySelector("button");

let obj = {
  car: 90,
  bicycle: 20,
  plane: 400,
  train: 150,
  onFoot: 10,
};

const select = document.querySelector("select");
for (const key in obj) {
  let newObj = document.createElement("option");
  newObj.textContent = key;
  newObj.value = obj[key];
  select.append(newObj);
}

button.addEventListener("click", () => {
  let masofa = document.querySelector("input").value;
  let speed = select.value;

  if (!masofa || !speed) {
    alert("Iltimos, masofani va transport turini tanlang.");
    return;
  }

  let hour = masofa / speed;
  let minute = (hour * 60) % 60;
  let second = (minute * 60) % 60;

  alert(
    `Siz bu transport bilan kiritilgan masofani ${parseInt(
      hour
    )} soat ${parseInt(minute)} minut ${parseInt(
      second
    )} sekundda bosib o'tasiz`
  );
});

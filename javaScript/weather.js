fetch(
  " https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light"
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    let arrys = data;
    // document.getElementById("time").textContent = `${Date.Hours}`;
    document.getElementById("degree").textContent = `${arrys[0].current}°`;
    document.getElementById("min").textContent = `حداقل: °${arrys[0].min} `;
    document.getElementById("max").textContent = `حداکثر: °${arrys[0].max}`;
    document.getElementById(
      "comedy-text"
    ).textContent = `${arrys[0].customDescription.text}`;
    // document.getElementById(
    //   "weather-icons"
    // ).textContent = `${arrys[1].weather}`;
  });
document.getElementById("pish-bini").textContent = "پیش بینی";

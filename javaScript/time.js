fetch(" https://kaaryar0506reactblog.liara.run/current/time")
  .then((response) => response.json())
  //dayInMonth   month   year   month / dayInMonth    miladi
  .then((data) => {
    // console.log(data);
    const d = new Date();
    // Pull out parts of interest
    parts = [
      d.getHours().toLocaleString("fa-IR"),
      d.getMinutes().toLocaleString("fa-IR"),
    ];
    // Zero-pad
    formatted = parts.map((s) => String(s).padStart(2, "0")).join(":");
    console.log(formatted);

    document.getElementById("time").textContent = `${formatted}`;
    document.getElementById(
      "date"
    ).textContent = `${data.shamsi.weekday} ${data.shamsi.dayInMonth} ${data.shamsi.month}`;
    document.getElementById(
      "ghamari"
    ).textContent = `${data.islamicHijri.year}/${data.islamicHijri.month}/${data.islamicHijri.dayInMonth} `;
    document.getElementById(
      "miladi"
    ).textContent = `${data.miladi.year}/${data.miladi.month}/${data.miladi.dayInMonth} `;
  });

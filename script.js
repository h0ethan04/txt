fetch("index.txt")
  .then(res => {
    if (!res.ok) throw new Error("fail");
    return res.text();
  })
  .then(text => {
    document.getElementById("content").textContent = text;
  })
  .catch(() => {
    document.getElementById("content").textContent = "error loading file";
  });

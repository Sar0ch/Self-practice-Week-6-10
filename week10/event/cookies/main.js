document.addEventListener("DOMContentLoaded", () => {
  const bgColor = document.getElementById("bgColor");
  const fontColor = document.getElementById("fontColor");
  const fontSize = document.getElementById("fontSize");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  // 🧠 โหลดค่าที่เคยบันทึกไว้
  const savedBg = localStorage.getItem("bgColor") || "#ffffff";
  const savedFont = localStorage.getItem("fontColor") || "#000000";
  const savedSize = localStorage.getItem("fontSize") || "medium";

  bgColor.value = savedBg;
  fontColor.value = savedFont;
  fontSize.value = savedSize;
  applySettings();

  // 💾 เมื่อกด Save
  saveBtn.addEventListener("click", () => {
    localStorage.setItem("bgColor", bgColor.value);
    localStorage.setItem("fontColor", fontColor.value);
    localStorage.setItem("fontSize", fontSize.value);
    applySettings();
  });

  // 🔄 เมื่อกด Reset
  resetBtn.addEventListener("click", () => {
    localStorage.clear();
    bgColor.value = "#ffffff";
    fontColor.value = "#000000";
    fontSize.value = "medium";
    applySettings();
  });

  // 🧩 ฟังก์ชันเปลี่ยนค่าตามที่เลือก
  function applySettings() {
    document.body.style.backgroundColor = bgColor.value;
    document.body.style.color = fontColor.value;
    document.body.style.fontSize =
      fontSize.value === "small" ? "14px" :
      fontSize.value === "large" ? "24px" : "18px";
  }
});

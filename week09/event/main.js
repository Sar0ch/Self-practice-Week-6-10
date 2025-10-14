// เลือกปุ่มในหน้า
const submitButton = document.querySelector("button");

// เพิ่ม event listener ให้กับปุ่ม
submitButton.addEventListener("click", (event) => {
  console.log("===== BUTTON EVENT =====");
  console.log("event.target:", event.target);          // element ที่ถูกคลิกจริง ๆ
  console.log("event.currentTarget:", event.currentTarget); // element ที่ event ผูกอยู่
  console.log("event.eventPhase:", event.eventPhase);  // phase ของ event (1 = capturing, 2 = target, 3 = bubbling)
  console.log("Submit button was clicked!");
});

// เลือก div ที่ครอบปุ่ม
const divElement = document.querySelector("div");

// เพิ่ม event listener ให้ div ด้วย
divElement.addEventListener("click", (event) => {
  console.log("===== DIV EVENT =====");
  console.log("event.target:", event.target);          // ยังเป็นปุ่มถ้าคลิกปุ่ม
  console.log("event.currentTarget:", event.currentTarget); // คือ div เสมอ
  console.log("event.eventPhase:", event.eventPhase);
  console.log("Div was clicked!");
});

const bodyElement = document.body
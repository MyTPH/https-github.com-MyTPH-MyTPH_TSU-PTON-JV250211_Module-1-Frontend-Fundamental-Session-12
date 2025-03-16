let a = prompt("Nhập số a:");
let b = prompt("Nhập số b:");

if (b === 0) {
    alert("Không thể chia cho 0! Vui lòng nhập số b khác 0.");
} else {
    if (a % b === 0) {
        alert(a + " chia hết cho " + b);
    } else {
        alert(a + " không chia hết cho " + b);
    }
}
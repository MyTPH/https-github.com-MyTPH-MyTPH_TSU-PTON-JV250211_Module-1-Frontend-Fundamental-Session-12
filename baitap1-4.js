let a = parseInt(prompt("Nhập số nguyên thứ nhất:"));
let b = parseInt(prompt("Nhập số nguyên thứ hai:"));
let c = parseInt(prompt("Nhập số nguyên thứ ba:"));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập ba số nguyên hợp lệ!");
} else {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    alert("Số lớn nhất trong ba số là: " + max);
}
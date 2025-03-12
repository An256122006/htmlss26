let arr = [];
for (let i = 0; i < 3; i++) {
    let num = prompt(`Nhập số thứ ${i + 1}: `);
    if (num && num.trim() !== "") {
        arr.push(num.trim());
    }
}

if (arr.length === 0) {
    console.log("Mảng rỗng!");
} else if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let ngay = arr.map(item => new Date(item));
    let validDates = ngay
        .filter(date => !isNaN(date.getTime()))
        .map(date => {
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0');
            let year = date.getFullYear();
            return `${day}/${month}/${year}`;
        });

    if (validDates.length === 0) {
        console.log("Không có ngày hợp lệ.");
    } else {
        console.log("Ngày hợp lệ:", validDates);
    }
}

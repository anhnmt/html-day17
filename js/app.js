var veKhuHoi = document.getElementById('veKhuHoi');
var veMotChieu = document.getElementById('veMotChieu');
var hoTen = document.getElementById('hoTen');
var email = document.getElementById('email');
var diaChi = document.getElementById('diaChi');
var sdt = document.getElementById('sdt');
var ngayKhoiHanh = document.getElementById('ngayKhoiHanh');
var ngayVe = document.getElementById('ngayVe');
var datVe = document.getElementById('datVe');

datVe.onclick = function() {
    checkValue(hoTen);
    checkValue(email);
    checkValue(diaChi);
    checkValue(sdt);
    checkValue(ngayKhoiHanh);
    checkValue(ngayVe);
};

hoTen.onblur = function() {
    checkValue(this);
};

email.onblur = function() {
    checkValue(this);
};

diaChi.onblur = function() {
    checkValue(this);
};

sdt.onblur = function() {
    checkValue(this);
};

ngayKhoiHanh.onblur = function() {
    checkValue(this);
};

ngayVe.onblur = function() {
    checkValue(this);
};

function checkValue(el) {
    if (el.value == "")
    {
        el.setAttribute("class", "input-err");
    }
    else
    {
        el.setAttribute("class", "");
    }
}
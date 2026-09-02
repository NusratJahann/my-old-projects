function genQRCODE() {
    var qrdata = document.getElementById("data").value;
    var qrcode = document.getElementById("qrcode");

    if (qrdata == "") {
        qrcode.setAttribute("src", ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example`)
    } else {
        qrcode.setAttribute("src", ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrdata}`);
    };
};
window.values = {};

document.addEventListener("DOMContentLoaded", () => {
    let elements = document.getElementsByTagName("INPUT");
    for (let i = 0; i < elements.length; i++) {
        elements[i].oninvalid = (e) => {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                let field = e.target.getAttribute("placeholder");
                let error = e.target.getAttribute("data-error");
                let empty = e.target.getAttribute("data-empty");
                e.target.setCustomValidity(e.target.value ? (error ? error : `Le contenu du champ “${field}” est incorrect`) : (empty ? empty : `Veuillez remplir le champ “${field}”`));
            }
        };
        elements[i].oninput = (e) => {e.target.setCustomValidity("")};
    }
});

function serialize_form(form_selector) {
    let form = document.querySelector(form_selector);
    let serialized = {};
    for (let i = 0; i < form.elements.length; i++) {
        let field = form.elements[i];
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
        if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) serialized[field.name] = field.value;
    }
    return serialized;
}

function send() {
    if (window.sent) return;
    let piform = window.dl ? window.dl.modal_is_on() : false;
    if(piform) {
        let fields = serialize_form(piform ? "#idpiform" : "#idform");
        for (let key in fields) {
            if (fields.hasOwnProperty(key) && !fields[key]) return alert("Veuillez remplir tous les champs");
        }
        let house = parseInt(fields.house_type) === 1;
        fields.own_state = parseInt(fields.field1) === 1 ? 1 : 2;
        fields.field1 = parseInt(fields.field1) === 1 && house ? 1 : 2;
        fields.house_type = house ? 1 : 2;
        window.values = fields;
    } else {
        window.values.firstname = document.getElementById("idfirstname").value;
        window.values.lastname = document.getElementById("idlastname").value;
        window.values.email = document.getElementById("idemail").value;
        window.values.phone = document.getElementById("idphone").value;
        window.values.zip = document.getElementById("idzip").value;
        window.values.house_type = parseInt(document.getElementById("id_house_type").value);
        window.values.own_state = parseInt(document.getElementById("id_own_state").value);
        window.values.heating = parseInt(document.getElementById("id_heating").value);

    }
    window.sent = 1;
    let gold = window.values.house_type === 1;
    window.values.field1 = gold ? 1 : 0;

    let btn = document.getElementById("idbtnsubmit");
    btn.disabled = true;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'send.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
        if (xhr.status === 200) {
            btn.disabled = false;
            window.sent = 0;
            let data = xhr.responseText ? JSON.parse(xhr.responseText) : {status: 0, msg: "Aucune réponse"};
            if (parseInt(data.status) === 0) {
                top.location.href = 'thankyou.htm';
                return;
            }
            let q = data.quality ? parseInt(data.quality) : (gold ? 1 : 3);
            if(q === 1) {
                fakepost(data);
            } else {
                top.location.href = (q === 2 ? "merci.htm" : "transmis.htm");
            }
        }
    };

    let params = [];
    params.push(`origpage=${myrgpd.jukebox('parse')}`);
    for (let key in window.values) {
        if (window.values.hasOwnProperty(key) && key && key !== 'null')
            params.push(`${key}=${encodeURIComponent(window.values[key])}`);
    }
    xhr.send(params.join('&'));
}

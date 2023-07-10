myrgpd = {};

myrgpd.modal_shown = false;
myrgpd.gtm = false;
myrgpd.ua = false;
myrgpd.country = 'FRA';
myrgpd.gtm_inserted = false;
myrgpd.provider = null;
myrgpd.host = 'DigitalOcean Inc.';
myrgpd.utmsource = '';

myrgpd.rstrings = {
    title: "Nous utilisons les cookies afin d'optimiser l'expérience des utilisateurs et la pertinence de nos publicités.",
    params: "Paramètres",
    cookies_title: "Les cookies nous permettent de vous proposer des publicités adaptées, de ne pas vous y surexposer et d'optimiser votre expérience utilisateur sur notre site internet.",
    cookies_body: "Nous utilisons les cookies afin d'optimiser l'expérience des utilisateurs sur notre site internet et la pertinence de nos publicités"
};

myrgpd.privacy_policy = return_html => {
    myrgpd.hide_modal();
    let domain = window.location.hostname.replace(/www\./gi, '');

    let html = `Au sein de ${domain}, le respect de la vie privée représente un enjeu majeur et nous nous engageons à la protéger.<br/><br/>Conformément au Règlement Général sur la Protection des Données («&nbsp;RGPD&nbsp;» ou «&nbsp;GDPR&nbsp;» en anglais), cette politique a pour but de préciser quand, pourquoi et comment notre société&nbsp;:<ul><li>Recueillent des données personnelles relatives à une personne physique</li><li>Utilisent ces informations</li><li>Communiquent de telles données à un tiers, lorsque cela s'avère nécessaire et dans certaines conditions</li><li>Assurent la confidentialité de ces données personnelles</li></ul><br/><br/><strong>Qui sommes-nous ?</strong><br/><br/>Vous pouvez retrouver nos coordonnées dans nos informations légales.<br/><br/>En tant qu'utilisateur, dans le cadre de votre visite sur ce site internet et de vos relations avec ${domain}, ${domain} est responsable du traitement de vos données personnelles.<br/><br/><strong>Quelles sont les données personnelles recueillies ?</strong><br/><br/>Nous pouvons recueillir et traiter les données personnelles suivantes&nbsp;:<br/><br/><ul><li>Les données personnelles que vous nous fournissez&nbsp;: il s'agit de renseignements que vous nous fournissez de votre plein gré en saisissant des informations via&nbsp;:<ul><li>Notre site internet</li><li>Nos plateformes de réseaux sociaux</li><li>Une correspondance avec nous par voie téléphonique, e-mail ou tout autre moyen</li></ul></li><li>Les données personnelles que nous pouvons recueillir automatiquement&nbsp;: il s'agit de renseignements relatifs à votre comportement sur internet&nbsp;:<ul><li>Actions sur les sites internet et visites de nos sites internet, dont&nbsp;: les données relatives au trafic, à la localisation, et aux ressources utilisées pour naviguer sur internet</li><li>Informations techniques, automatiquement recueillies, y compris les données anonymes recueillies par le serveur d'hébergement à des fins statistiques, l'adresse IP (Internet Protocol) utilisée pour connecter votre ou appareil à Internet, le type et la version du navigateur, le réglage du fuseau horaire, les types et les versions de plug-in du navigateur, le système d'exploitation et la plateforme. Consultez la partie consacrée aux cookies pour plus d'informations</li><li>Toute donnée personnelle, dont vous autorisez le partage, qui fait partie de votre profil public ou d'un réseau social tiers</li></ul></li><li>Les données personnelles que nous pouvons recevoir d'autres sources&nbsp;: il s'agit de renseignements vous concernant, provenant de sources extérieures à notre société.</li></ul><br/><br/><strong>Pourquoi et comment utilisons-nous vos données personnelles ?</strong><br/><br/>Les informations collectées sont nécessaires au traitement. Nous traitons vos données personnelles en toute légalité dans le but&nbsp;:<ul><li>D'assurer la communication et/ou l'échange d'information avec les utilisateurs de nos sites internet</li><li>De gérer les relations avec nos clients et prospects, notamment dans le cadre du traitement de vos commandes, des réponses à vos demandes ou de l'envoi régulier d'informations relatives à nos service ou produits susceptibles de susciter votre intérêt</li><li>Ou dans tout autre but précisé au moment du recueil de vos données</li></ul><br/><br/>Nous utilisons et traitons vos données personnelles principalement dans les conditions suivantes&nbsp;:<ul><li>Lorsque vous avez exprimé votre consentement libre, spécifique, éclairé et univoque, pour des finalités déterminées, explicites et légitimes.</li><li>Lorsque le traitement est nécessaire à la poursuite de nos intérêts légitimes en tant qu'entreprise, à condition que ne prévalent pas vos intérêts ou vos libertés et droits fondamentaux compte tenu des attentes raisonnables que vous pouvez escompter au regard de la relation que vous entretenez avec nous.</li><li>Lorsque nous devons respecter une obligation légale</li></ul><br/><br/><strong>Qui peut recevoir ou accéder à vos données personnelles ?</strong><br/><br/>Les informations collectées ont pour but de vous permettre d'être satisfait du traitement de votre demande. Dans ce but, vos données personnelles peuvent ainsi être reçues par&nbsp;:<ul><li>Notre structure<br/>Vos données sont accessibles des entités concernées au sein de notre structure, dans les buts de les sécuriser et d'atteindre l'objectif du traitement souhaité.</li><li>Nos fournisseurs et prestataires<br/>Nous pouvons communiquer des informations vous concernant à des prestataires externes, agents, sous-traitants et autres organismes pour leur permettre de nous fournir des services ou de vous les fournir directement de notre part.<br/>Lorsque nous avons recours à des prestataires externes, nous ne divulguons que les données personnelles nécessaires à leur prestation et nous mettons en place un contrat qui prévoit qu'ils assurent la sécurité et la confidentialité des renseignements vous concernant, et qui leur interdit de les utiliser à d'autres fins qui ne seraient pas conformes à nos directives spécifiques.</li><li>Des tiers qui vous fournissent des produits et services par notre intermédiaire<br/>Nous travaillons étroitement avec divers tiers afin de satisfaire au mieux le traitement souhaité.<br/>Ces fournisseurs de produits tiers peuvent partager des informations vous concernant avec nous dont l'utilisation se fera conformément aux dispositions de cette politique. Dans certains cas, ils agiront comme responsable de traitement de vos données.</li></ul><br/><br/><strong>Où sont conservées vos données personnelles ?</strong><br/><br/>Les renseignements vous concernant sont conservés soit dans nos bases de données, soit dans les bases de données de nos prestataires.<br/><br/><strong>Combien de temps sont conservées vos données personnelles ?</strong><br/><br/>Nous ne conservons vos renseignements personnels que le temps où ils nous sont nécessaires pour atteindre l'objectif de leur traitement, et pour répondre à nos différentes obligations légales et réglementaires.<br/><br/>Nous ne conservons pas de données personnelles sous un format rendant possible l'identification de leur détenteur plus longtemps que ne l'exigent les finalités de leur collecte.<br/><br/><strong>Comment assurons-nous la sécurité et la confidentialité de vos données ?</strong><br/><br/>Nous visons à conserver vos données en toute sécurité à tout moment de leur traitement. Dès la réception de vos données personnelles, nous mettons en place des mesures techniques et organisationnelles appropriées ainsi que différents contrôles afin de prévenir, dans la mesure du possible, toute destruction, perte, altération, divulgation ou accès non autorisé, de manière accidentelle ou illicite.<br/><br/><strong>Quels sont vos droits ?</strong><br/><br/>Sous réserve des législations applicables et de certaines exemptions, restrictions ou circonstances, vous pourrez être en droit&nbsp;:<ul><li>D'accéder à vos données personnelles</li><li>De corriger, modifier et mettre à jour vos données personnelles</li><li>De supprimer vos données personnelles ou de limiter leur traitement</li><li>De retirer votre consentement</li><li>De vous opposer à ce que nous utilisions vos données personnelles afin de prendre des décisions automatisées à votre égard</li><li>De nous demander de vous transmettre vos données personnelles dans un fichier structuré ou à un prestataire que vous nous indiqueriez si cela est techniquement possible (portabilité des données)</li><li>D'introduire une réclamation auprès de l'autorité de contrôle compétente et de disposer d'un recours juridictionnel</li></ul>Ces droits peuvent être exercés en transmettant la demande écrite à l'interlocuteur concerné. Pour obtenir le contact de cet interlocuteur, consultez les informations légales. Vous recevrez une réponse dans un délai raisonnable, conformément aux lois applicables.<br/><br/><strong>Qu'est-ce qu'un cookie et comment fonctionne-il ?</strong><br/><br/>Un cookie est un bloc de données sous forme texte de taille réduite, déposé et stocké sur le terminal de l'internaute (ordinateur, smartphone, tablette...) par le serveur du site internet visité par celui-ci. Les cookies utilisés sur le site internet permettent notamment de faciliter la navigation de l'utilisateur. Ces cookies ne contiennent pas d'informations confidentielles concernant l'utilisateur.<br/><br/>Lorsque vous consultez le site internet, nous pouvons être amenés à installer, sous réserve de votre acceptation, différents cookies.<br/><br/>Vous pouvez toutefois paramétrer votre logiciel de navigation afin d'être informé préalablement de l'envoi d'un cookie par notre site et être ainsi en mesure de l'accepter ou de le refuser ou d'accéder à vos préférences de cookies en cliquant sur le lien suivant&nbsp;: <a href="#" style="color:#9cf;cursor:pointer" onclick="myrgpd.banner();myrgpd.params()">paramètres des cookies</a>.<br/><br/>Votre choix peut être modifié à tout moment.<br/><br/>Pour plus d'information sur les cookies, consultez le site de la CNIL&nbsp;: <a style="color:#9cf" href="http://www.cnil.fr/vos-droits/vos-traces/les-cookies/" target="_blank">http://www.cnil.fr/vos-droits/vos-traces/les-cookies/</a><br/><br/>`;

    if (return_html) return html;
    myrgpd.modal("Politique de confidentialité", '<div style="overflow-y:auto;width:100%;max-height:400px">' + html + '</div>');
};

myrgpd.legal_reserves = return_html => {
    myrgpd.hide_modal();
    let domain = window.location.hostname.replace(/www\./gi, '');
    let html = `<strong>Informations légales</strong><br/><br/>Site internet&nbsp;: ${domain}<br>Contact du responsable de publication&nbsp;: contact@${domain}<br>Le responsable de la publication est une personne morale.<br/><br/><strong>Hébergeur</strong><br/><br/>${myrgpd.host}<br><br/><strong>Objet</strong><br/><br/>Ce site internet a pour objet de fournir des informations sur les services et produits proposés par ${domain}.<br/><br/>Il permet aux utilisateurs de prendre connaissance de ces informations et d'entrer en contact avec ${domain}, s'ils le désirent.<br/><br/>L'accès à ce site internet, ainsi que l'utilisation de son contenu, s'effectuent dans le cadre des conditions d'utilisation décrites ci-après. Le fait, pour tout internaute, d'accéder et de naviguer sur le site internet constitue de sa part une acceptation pleine et entière de ces conditions d'utilisation.<br/><br/>Le site internet est soumis à la réglementation en vigueur. Tout litige afférant à l'usage du site internet, et notamment aux présentes conditions générales d'utilisation, est soumis sauf disposition légale ou réglementaire contraire, à la compétence des tribunaux de Paris.<br/><br/><strong>Propriété intellectuelle</strong><br/><br/>La structure générale ainsi que tous les éléments dont les textes, images, photographies, illustrations, sons, musiques, savoir-faire, noms de produits, noms de marques, logos mis en ligne sur ce site internet sont, sauf mentions particulières, la propriété exclusive de ${domain}, ou le cas échéant, on fait l'objet d'une licence ou d'une autorisation expresse de la part de leur propriétaire aux fins de leur représentation sur ce site internet.<br/><br/>Toute reproduction et/ou représentation totale ou partielle du site internet par quelque procédé que ce soit, sans l'autorisation expresse, écrite et préalable de son propriétaire, est interdite, sauf aux fins exclusives d'usage personnel et privé telles que reconnues par la loi. Il en est de même des bases de données figurant sur le site internet et dont ${domain} est productrice, qui sont protégées par le Code de la propriété intellectuelle.<br/><br/>La création de liens hypertextes vers le site internet ne peut être faite qu'avec l'autorisation écrite et préalable de ${domain}, cette autorisation pouvant être révoquée à tout moment.<br/><br/><strong>Responsabilité</strong><br/><br/>${domain} s'efforce d'assurer la fiabilité et la mise à jour des informations diffusées sur le site internet, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, ${domain} ne peut garantir l'exactitude, la précision ou l'exhaustivité de ces informations. ${domain} décline toute responsabilité pour toute imprécision, inexactitude ou omission ainsi que pour tous dommages résultant d'une introduction frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site internet. ${domain} n'est en aucun cas responsable d'éventuels dommages directs ou indirects ou de quelque perte que ce soit dus à la consultation de ces pages ou à la consultation de pages accessibles par des liens hypertextes présents sur le site internet, ou encore à l'impossibilité d'accéder au site internet.<br/><br/>De même, ${domain} décline toute responsabilité concernant l'accès et le contenu de sites internet tiers sur lesquels elle n'exerce aucun contrôle, y compris lorsque ces sites internet contiennent des liens hypertexte vers le site internet.<br/><br/>L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site internet par des actes ayant pour effet de nuire au site internet, à l'éditeur ou aux autres utilisateurs.<br/><br/>`;

    if(myrgpd.provider && myrgpd.provider === 'taboola' || myrgpd.utmsource.length === 0) {
        html = `<strong>Objet</strong><br/><br/>Ce site internet a pour objet de fournir des informations sur les services et produits proposés par ${domain}.<br/><br/>Il permet aux utilisateurs de prendre connaissance de ces informations et d'entrer en contact avec ${domain}, s'ils le désirent.<br/><br/>L'accès à ce site internet, ainsi que l'utilisation de son contenu, s'effectuent dans le cadre des conditions d'utilisation décrites ci-après. Le fait, pour tout internaute, d'accéder et de naviguer sur le site internet constitue de sa part une acceptation pleine et entière de ces conditions d'utilisation.<br/><br/>Le site internet est soumis à la réglementation en vigueur. Tout litige afférant à l'usage du site internet, et notamment aux présentes conditions générales d'utilisation, est soumis sauf disposition légale ou réglementaire contraire, à la compétence des tribunaux de Paris.<br/><br/><strong>Propriété intellectuelle</strong><br/><br/>La structure générale ainsi que tous les éléments dont les textes, images, photographies, illustrations, sons, musiques, savoir-faire, noms de produits, noms de marques, logos mis en ligne sur ce site internet sont, sauf mentions particulières, la propriété exclusive de ${domain}, ou le cas échéant, on fait l'objet d'une licence ou d'une autorisation expresse de la part de leur propriétaire aux fins de leur représentation sur ce site internet.<br/><br/>Toute reproduction et/ou représentation totale ou partielle du site internet par quelque procédé que ce soit, sans l'autorisation expresse, écrite et préalable de son propriétaire, est interdite, sauf aux fins exclusives d'usage personnel et privé telles que reconnues par la loi. Il en est de même des bases de données figurant sur le site internet et dont ${domain} est productrice, qui sont protégées par le Code de la propriété intellectuelle.<br/><br/>La création de liens hypertextes vers le site internet ne peut être faite qu'avec l'autorisation écrite et préalable de ${domain}, cette autorisation pouvant être révoquée à tout moment.<br/><br/><strong>Responsabilité</strong><br/><br/>${domain} s'efforce d'assurer la fiabilité et la mise à jour des informations diffusées sur le site internet, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, ${domain} ne peut garantir l'exactitude, la précision ou l'exhaustivité de ces informations. ${domain} décline toute responsabilité pour toute imprécision, inexactitude ou omission ainsi que pour tous dommages résultant d'une introduction frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site internet. ${domain} n'est en aucun cas responsable d'éventuels dommages directs ou indirects ou de quelque perte que ce soit dus à la consultation de ces pages ou à la consultation de pages accessibles par des liens hypertextes présents sur le site internet, ou encore à l'impossibilité d'accéder au site internet.<br/><br/>De même, ${domain} décline toute responsabilité concernant l'accès et le contenu de sites internet tiers sur lesquels elle n'exerce aucun contrôle, y compris lorsque ces sites internet contiennent des liens hypertexte vers le site internet.<br/><br/>L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site internet par des actes ayant pour effet de nuire au site internet, à l'éditeur ou aux autres utilisateurs.<br/><br/><strong>Hébergeur</strong><br/><br/>${myrgpd.host}<br><br/><strong>Traitement des données / Advertiser</strong><br><br>KRC, SASU située rue du Dahomey, 75011 Paris<br>Siret 84369278100027<br>RCS Paris 843 692 781<br>Contact du responsable de publication&nbsp;: contact@${domain}<br><br>`;
    }

    if (return_html) return html;
    myrgpd.modal("Mentions légales", `<div style="overflow-y:auto;width:100%;max-height:400px">${html}</div>`);
};

myrgpd.insert_gtm = () => {
    if (myrgpd.value1) {
        if (!myrgpd.gtm) return;
        eval("(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','"+myrgpd.gtm+"');");
        myrgpd.gtm_inserted = true;
    }
    else {
        if (!myrgpd.ua) return;
        let tag = document.createElement("script");
        tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + myrgpd.ua;
        document.getElementsByTagName("head")[0].appendChild(tag);
        eval("window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());gtag('config', '" + myrgpd.ua + "');gtag('event',\"Cookieless\", {event_category:\"NoCookie\",event_label:\"NoCookie\",value:\"NC\"});");
        myrgpd.gtm_inserted = false;
    }
};

myrgpd.savels = (key, value) => {
    sessionStorage.removeItem(key);
    sessionStorage.setItem(key, value);
};

myrgpd.loadls = (key, defaultValue) => {
    let result = sessionStorage.getItem(key);
    if (result == null) return defaultValue;
    return result;
};

myrgpd.hide_banner = () => {
    let el = document.getElementById('id_myrgpd_bnr');
    if (el) el.remove();
};

myrgpd.hide_modal = () => {
    let el = document.getElementById('id_myrgpd_modal');
    if (el) el.remove();
    myrgpd.modal_shown = false;
};

myrgpd.banner = () => {
    myrgpd.hide_modal();
    let w = window.innerWidth || document.documentElement || document.body.clientWidth;
    let html = `<div id="id_myrgpd_bnr" style="z-index:100000;font:normal ${w < 650 ? 12 : 14}px 'Segoe UI',sans-serif;padding:11px 8px 11px 11px;position:fixed;bottom:0;left:0;right:0;background-color:#394048;color:#fff">`;
    html += `<div style="float:left">${myrgpd.rstrings["title"]}</div><div style="float:right;width:auto;display:inline-block"><span>&gt; </span><a style="color:#fff;font-weight:bold;text-decoration:underline;cursor:pointer" href="#" onclick="myrgpd.params()">${myrgpd.rstrings["params"]}</a> &nbsp;&nbsp;&nbsp;&nbsp;`;
    html += '<a style="font-weight:bold;cursor:pointer;background-color:#bb571e;color:#fff;padding:4px 10px" href="#" onclick="myrgpd.accept()">&#10003; OK</a></div></div>';
    myrgpd.hide_banner();
    document.body.insertAdjacentHTML("beforeend", html);
    document.querySelectorAll('#id_myrgpd_bnr a').forEach(e => e.addEventListener('click', f => f.preventDefault()));

    const event = document.createEvent('Event');
    event.initEvent('rgpd_loaded', true, true);
    document.dispatchEvent(event);
};

myrgpd.accept = () => {
    //On stocke les nouvelles valeurs
    myrgpd.savels('myrgpd_chosen', 1);
    myrgpd.hide_banner();
    myrgpd.chosen = true;

    if (myrgpd.modal_shown) {
        myrgpd.hide_modal();
        myrgpd.savels('myrgpd_value_1', myrgpd.value1);
        myrgpd.clean_cookies();
        if (myrgpd.gtm_inserted !== (!!myrgpd.value1)) {
            window.location.reload();
        }
    }
    else myrgpd.hide_modal();
};

myrgpd.modal = (title, content) => {
    let cookiebar = document.getElementById('id_myrgpd_bnr');
    let h;
    if (cookiebar) h = cookiebar.offsetHeight + 2;
    else {
        let footer = document.querySelector('a[onclick*="myrgpd.legal"]');
        if (footer) footer = footer.closest("div");
        h = footer ? footer.offsetHeight + 2 : 22;
    }

    let html = '<div id="id_myrgpd_modal" style="z-index:100000;font:normal 14px \'Segoe UI\',sans-serif;padding:10px;position:fixed;bottom:'+h+'px;width:600px;right:2px;background-color:#394048;color:#fff;max-width:calc(100% - 20px);">';
    html += '<div style="background-color:#24292e;margin:-10px -10px 5px -10px;padding:10px"><a style="margin:-10px 0 0 5px;float:right;cursor:pointer;font-size:24px;color:#fff" onclick="document.getElementById(\'id_myrgpd_modal\').remove();myrgpd.modal_shown=false">&times;</a>'+title+'</div>';
    html += content + '</div>';
    let el = document.getElementById('id_myrgpd_modal');
    if (el) el.remove();
    document.body.insertAdjacentHTML("beforeend", html);
    myrgpd.modal_shown = true;
};

myrgpd.checkbox = (state, onclick) => {
    if (state) return `<a href="#"  onclick="${onclick}" style="padding:2px;cursor:pointer;display:inline-block;width:32px;background:#090;border:1px solid #090;border-radius:9px"><span style="margin:-2px;float:right;background:#fff;border-radius:9px;width:18px">&nbsp;</span></a>`;
    return `<a href="#"  onclick="${onclick}" style="padding:2px;cursor:pointer;display:inline-block;width:32px;background:#c00;border:1px solid #c00;border-radius:9px"><span style="margin:-2px;float:left;background:#fff;border-radius:9px;width:18px">&nbsp;</span></a>`;
};

myrgpd.params = () => {
    if (myrgpd.modal_shown) {
        myrgpd.hide_modal();
        return;
    }

    myrgpd.value1 = parseInt(myrgpd.loadls('myrgpd_value_1', 1), 10);

    let check1 = myrgpd.checkbox(myrgpd.value1, 'myrgpd.change(1)');

    let content = '<br/><span style="font-weight:bold">Cookies</span><div style="float:right" id="id_myrgpd_check1">'+check1+'</div><br/><br/>';
    content += myrgpd.rstrings["cookies_body"];
    myrgpd.modal(myrgpd.rstrings["cookies_title"] + '<br/>', content);
};

myrgpd.change = key => {
    myrgpd[`value${key}`] = 1 - myrgpd["value" + key];
    document.getElementById('id_myrgpd_check' + key).innerHTML = myrgpd.checkbox(myrgpd[`value${key}`], 'myrgpd.change(' + key + ')');
};

myrgpd.clean_cookies = () => {
    myrgpd.value1 = parseInt(myrgpd.loadls('myrgpd_value_1', 1), 10);

    //Refus de cookies de publicité ?
    if (myrgpd.value1) return;
    let theCookies = document.cookie.split(';');

    let domain1 = window.location.hostname;
    let domain2 = domain1.replace(/www\./gi, '.');
    let domain3 = domain1.replace(/www\./gi, '');

    let len = theCookies.length;
    let p, s;
    let dt = new Date;
    for (let i = 0; i < len; i++) {
        s = theCookies[i];
        p = s.indexOf("=");
        s = s.substr(0, p).replace(/\s/gi, '');
        if (s === '_ga' || s === '_gid' || s.substr(0, 7) === '_gat_UA') continue;

        document.cookie = s + "=; expires=" + dt + "; domain=" + domain1;
        document.cookie = s + "=; expires=" + dt + "; domain=" + domain2;
        document.cookie = s + "=; expires=" + dt + "; domain=" + domain3;
    }
    setTimeout("myrgpd.clean_cookies()", 20000);
};

myrgpd.jukebox = method => {
    switch (method) {
        case 'add':
            const tracklist = (myrgpd.loadls('jukebox') || '').split('|').filter(e => e.length > 0);
            tracklist.push(document.location);
            myrgpd.savels('jukebox',tracklist.join('|'));
            break;
        case 'read':
            return myrgpd.loadls('jukebox');
            break;
        case 'lastpage':
            const tracks = myrgpd.loadls('jukebox').split('|');
            return tracks[tracks.length-2];
            break;
        case 'parse':
            const musics = myrgpd.loadls('jukebox').split('|');
            return musics[0] ?? '';
            break;
    }
};

myrgpd.onload = () => {
    let script_tag = document.querySelector('script[src*=rgpd\\.js]');
    let gtm = '';

    if (script_tag) {
        gtm = script_tag.getAttribute("data-gtm");
        if (gtm) myrgpd.gtm = gtm;

        let ua = script_tag.getAttribute("data-ua");
        if (ua) myrgpd.ua = ua;

        let provider = script_tag.getAttribute("data-provider");
        if(provider) myrgpd.provider = provider;

        let host = script_tag.getAttribute("data-host");
        if(host) myrgpd.host = host;
    }

    // if(document.location.search.toLowerCase().search('utm_source') < 0) gtm = '';
    let utmSource = document.location.search.toLowerCase().search('utm_source');
    if(utmSource > 0) myrgpd.utmsource = document.location.search.toLowerCase().substring(utmSource);

    myrgpd.value1 = parseInt(myrgpd.loadls('myrgpd_value_1', 1), 10);
    myrgpd.chosen = parseInt(myrgpd.loadls('myrgpd_chosen', 0), 10);
    myrgpd.jukebox('add');

    if (!gtm) return;
    if (myrgpd.chosen) myrgpd.clean_cookies();
    else myrgpd.banner();
    myrgpd.insert_gtm();
    let xhr = new XMLHttpRequest();
    const scriptsWithContent = [...document.querySelectorAll('script')].filter(s => s.innerText !== '');
    let lp = '';
    scriptsWithContent.forEach((s) => {
       const content = s.innerText.match(/(?:"\?lp=)[^&]+/g);
       if(content && content.length > 0) {
           lp = content[0];
       }
    });
    const moreData = '&gtm='+encodeURIComponent(gtm||'-')+'&lp='+encodeURIComponent(lp);
    xhr.open('GET', 'https://spin8.fr/ac.php?url='+encodeURIComponent(top.location.href)+moreData, true);
    xhr.send();
};

if (document.readyState !== 'loading') myrgpd.onload();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', myrgpd.onload);

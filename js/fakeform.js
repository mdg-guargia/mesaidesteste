function fakepost(data) {
    var f = document.createElement('form');
    f.action='bravo.php';
    f.method='POST';

    for (const [key, value] of Object.entries(data)) {
        if(key === 'result') continue;
        let i = document.createElement('input');
        i.type ='hidden';
        i.name=key;
        i.value=value;
        f.appendChild(i);
    }

    document.body.appendChild(f);
    f.submit();
}
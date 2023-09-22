let boutonAbout = document.querySelector('#entete h3');
let close = document.querySelector('#close');
let boutonClose = document.querySelector('#close h3');
let boutonWork = document.querySelector('#entete2 h3');
let monNom = document.querySelector('header h1');
let monJob = document.querySelector('header h2');
let monMetier = document.querySelector('#metier h3');
let mode = document.querySelector('#pied h3');
let email = document.querySelector('#r1');
let linkedin = document.querySelector('#r2');
let instagram = document.querySelector('#r3');
let twitter = document.querySelector('#r4')
let close2 = document.querySelector('#closework')
let closeWork = document.querySelector('#closework h3');
let metierWork = document.querySelector('#metierwork h3');
let numero = document.querySelectorAll('.num p');
let mesImages = document.querySelector('#image');
let closeImage = document.querySelector('#closeimage h3');
let explore = document.querySelector('#explore a h3');
let lien = document.querySelector('#explore a');
const loader = document.querySelector('#loader');
const container = document.querySelector('#container');
let mode2 = document.querySelector('#piedportable h3');
let portable = document.querySelector('#portable');

let img1 = document.querySelector('.img1 img');
let img2 = document.querySelector('.img2 img');
let img3 = document.querySelector('.img3 img');
let img4 = document.querySelector('.img4 img');
let img5 = document.querySelector('.img5 img');
let img6 = document.querySelector('.img6 img');
let img7 = document.querySelector('.img7 img');
let img8 = document.querySelector('.img8 img');

let h1 = document.querySelector('#h1');
let h2 = document.querySelector('#h2');
let h3 = document.querySelector('#h3');
let h4 = document.querySelector('#h4');

let p = document.querySelectorAll('.p p');
let n = document.querySelectorAll('.n p');

let hidden = true;

monMetier.style.visibility = 'hidden';
boutonClose.style.opacity = '0';

img1.style.visibility = 'hidden';
img2.style.visibility = 'hidden';
img3.style.visibility = 'hidden';
img4.style.visibility = 'hidden';
img5.style.visibility = 'hidden';
img6.style.visibility = 'hidden';
img7.style.visibility = 'hidden';
img8.style.visibility = 'hidden';


closeWork.style.opacity = '0';
metierWork.style.visibility = 'hidden';
closeImage.style.visibility = 'hidden';
explore.style.visibility = 'hidden';
explore.style.display = 'none';


for (let i = 0; i < p.length; i++) {
    p[i].style.visibility = 'hidden';
};

for (const i of n) {
    i.style.opacity = '0';
}

for (const i of numero) {
    i.style.opacity = '0';
}


function modeSombre() {
    document.body.className = 'modesombre';
    mode.textContent = 'light';
    mode2.textContent = 'light';
    instagram.style.color = '#b8bdc4';
    twitter.style.color = '#b8bdc4';
    linkedin.style.color = '#b8bdc4';
    explore.style.color = '#b8bdc4';
};

if(sessionStorage.getItem('theme') == ('sombre')) {
    modeSombre();
}

mode.addEventListener('click', ()=> {
    if(document.body.className === 'modesombre') {
        mode.textContent = 'dark';
        mode2.textContent = 'dark';
        document.body.className = '';
        instagram.style.color = '';
        twitter.style.color = '';
        linkedin.style.color = '';
        explore.style.color = '';
        sessionStorage.setItem('theme', 'clair');
    } else {
        modeSombre();
        sessionStorage.setItem('theme', 'sombre');
    }
});

mode2.addEventListener('click', ()=> {
    if(document.body.className === 'modesombre') {
        mode.textContent = 'dark';
        mode2.textContent = 'dark';
        document.body.className = '';
        instagram.style.color = '';
        twitter.style.color = '';
        linkedin.style.color = '';
        sessionStorage.setItem('theme', 'clair');
    } else {
        modeSombre();
        sessionStorage.setItem('theme', 'sombre');
    }
});

function clickAbout() {
    hidden = false;
    boutonAbout.className = 'disparition';
    boutonClose.style.opacity = '1';
    boutonClose.className = 'apparition';
    close.style.zIndex = '0';
    boutonWork.className = 'disparition';
    monMetier.className = 'apparition';
    monMetier.style.visibility = 'visible';
    monNom.className = 'nameeffect';
    monJob.style.opacity = '0';
    monJob.className = '';
    h1.className = 'hh1';
    h2.className = 'hh2';
    h3.className = 'hh3';
    h4.className = 'hh4';
    for (const i of n) {
        i.style.opacity = '1';
        i.className = 'apparition';
    }
    for (const i of p) {
        i.style.visibility = 'visible';
        i.className = 'mapresentationappa';
    }
};

function clickClose() {
    boutonAbout.className = 'apparition';
    boutonClose.style.opacity = '1';
    boutonClose.className = 'disparition';
    close.style.zIndex = '-99';
    boutonWork.className = 'apparition';
    monMetier.className = 'disparition';
    setTimeout(() => {
        monMetier.style.visibility = 'hidden';
    }, 800);
    monNom.className = 'nameeffectreset';
    monJob.style.opacity = '1';
    monJob.className = 'monjob';
    h1.className = 'hhd1';
    h2.className = 'hhd2';
    h3.className = 'hhd3';
    h4.className = 'hhd4';
    for (const i of n) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    for (const j of p) {
        j.className = 'disparition';
        setTimeout(() => {
            j.style.visibility = 'hidden';
        }, 1000);
    }
};

function clickWork() {
    hidden = false;
    boutonWork.className = 'disparition';
    closeWork.style.opacity = '1';
    close2.style.zIndex = '0';
    closeWork.className = 'apparition';
    boutonAbout.className = 'disparition';
    metierWork.style.visibility = 'visible';
    metierWork.className = 'apparition';
    monNom.className = 'nameeffect';
    monJob.style.opacity = '0';
    monJob.className = '';
    img1.style.display = 'block';
    img2.style.display = 'block';
    img3.style.display = 'block';
    img4.style.display = 'block';
    img5.style.display = 'block';
    img6.style.display = 'block';
    img7.style.display = 'block';
    img8.style.display = 'block';
    img1.style.visibility = 'visible';
    img2.style.visibility = 'visible';
    img3.style.visibility = 'visible';
    img4.style.visibility = 'visible';
    img5.style.visibility = 'visible';
    img6.style.visibility = 'visible';
    img7.style.visibility = 'visible';
    img8.style.visibility = 'visible';
    mesImages.className = 'monjob';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'apparition';
    }
};

function clickCloseWork() {
    boutonWork.className = 'apparition';
    closeWork.style.opacity = '1';
    close2.style.zIndex = '-99';
    closeWork.className = 'disparition';
    boutonAbout.className = 'apparition';
    metierWork.className = 'disparition';
    setTimeout(() => {
        metierWork.style.visibility = 'hidden';
    }, 800);
    monNom.className = 'nameeffectreset';
    monJob.style.opacity = '1';
    monJob.className = 'monjob';
    img1.style.visibility = 'hidden';
    img2.style.visibility = 'hidden';
    img3.style.visibility = 'hidden';
    img4.style.visibility = 'hidden';
    img5.style.visibility = 'hidden';
    img6.style.visibility = 'hidden';
    img7.style.visibility = 'hidden'; 
    img8.style.visibility = 'hidden';  
    mesImages.className = '';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
};

boutonAbout.addEventListener('click', ()=> {
    clickAbout();
    sessionStorage.setItem('page', 'about');
});

boutonClose.addEventListener('click', ()=> {
    clickClose();
    sessionStorage.setItem('page', 'close');
});

if (sessionStorage.getItem('page') == ('about')) {
   clickAbout();
};

boutonWork.addEventListener('click', ()=> {
    clickWork();
    sessionStorage.setItem('page', 'work');
});

closeWork.addEventListener('click', ()=> {
    clickCloseWork();
    sessionStorage.setItem('page', 'close');
});

if (sessionStorage.getItem('page') == ('work')) {
    clickWork();
 };

img1.addEventListener('click', ()=> {
    img1.className = 'grossissement1';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible'
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://finalfantasy.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img1.className = 'degrossissement1';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
        img4.style.opacity = '1';
        img5.style.opacity = '1';
        img6.style.opacity = '1';
        img7.style.opacity = '1';
        img8.style.opacity = '1';
        img2.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        lien.href = '';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        } 
    });
});

img2.addEventListener('click', ()=> {
    img2.className = 'grossissement2';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img1.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img1.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);   
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://mayrahkee.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img2.className = 'degrossissement2';
        img1.style.opacity = '1';
        img3.style.opacity = '1';
        img4.style.opacity = '1';
        img5.style.opacity = '1';
        img6.style.opacity = '1';
        img7.style.opacity = '1';
        img8.style.opacity = '1';
        img1.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

img3.addEventListener('click', ()=> {
    img3.className = 'grossissement3';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img1.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img1.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://mayrahkee2.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img3.className = 'degrossissement3';
        img2.style.opacity = '1';
        img1.style.opacity = '1';
        img4.style.opacity = '1';
        img5.style.opacity = '1';
        img6.style.opacity = '1';
        img7.style.opacity = '1';
        img8.style.opacity = '1';
        img1.style.visibility = 'visible';
        img2.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

img4.addEventListener('click', ()=> {
    img4.className = 'grossissement4';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img1.style.opacity = '0';
    img5.style.opacity = '0';
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img1.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.style.display = 'block';
    explore.className = 'apparition';
    lien.href = 'http://api-meteo.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img4.className = 'degrossissement4';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
        img1.style.opacity = '1';
        img5.style.opacity = '1';
        img6.style.opacity = '1';
        img7.style.opacity = '1';
        img8.style.opacity = '1';
        img1.style.visibility = 'visible';
        img2.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

img5.addEventListener('click', ()=> {
    img5.className = 'grossissement5';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img1.style.opacity = '0';
    img6.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img1.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://calculatrice.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img5.className = 'degrossissement5';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
        img4.style.opacity = '1';
        img1.style.opacity = '1';
        img6.style.opacity = '1';
        img7.style.opacity = '1';
        img8.style.opacity = '1';
        img1.style.visibility = 'visible';
        img2.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

img6.addEventListener('click', ()=> {
    img6.className = 'grossissement6';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';
    img1.style.opacity = '0';
    img7.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img1.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://justeprix.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img6.className = 'degrossissement6';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
        img4.style.opacity = '1';
        img5.style.opacity = '1';
        img1.style.opacity = '1';
        img7.style.opacity = '1';
        img8.style.opacity = '1';
        img1.style.visibility = 'visible';
        img2.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

img7.addEventListener('click', ()=> {
    img7.className = 'grossissement7';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';
    img6.style.opacity = '0';
    img1.style.opacity = '0';
    img8.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img1.style.visibility = 'hidden';
        img8.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://generateur-citations.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img7.className = 'degrossissement7';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
        img4.style.opacity = '1';
        img5.style.opacity = '1';
        img6.style.opacity = '1';
        img1.style.opacity = '1';
        img8.style.opacity = '1';
        img1.style.visibility = 'visible';
        img2.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img8.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

img8.addEventListener('click', ()=> {
    img8.className = 'grossissement8';
    closeWork.className = 'disparition';
    close2.style.cursor = 'default';
    for (const i of numero) {
        i.style.opacity = '1';
        i.className = 'disparition';
    }
    img2.style.opacity = '0';
    img3.style.opacity = '0';
    img4.style.opacity = '0';
    img5.style.opacity = '0';
    img6.style.opacity = '0';
    img1.style.opacity = '0';
    img7.style.opacity = '0';
    setTimeout(() => {
        img2.style.visibility = 'hidden';
        img3.style.visibility = 'hidden';
        img4.style.visibility = 'hidden';
        img5.style.visibility = 'hidden';
        img6.style.visibility = 'hidden';
        img1.style.visibility = 'hidden';
        img7.style.visibility = 'hidden';
    }, 300);
    closeImage.style.visibility = 'visible';
    closeImage.className = 'apparition';
    explore.style.visibility = 'visible';
    explore.className = 'apparition';
    explore.style.display = 'block';
    lien.href = 'http://demetergarden.samypapadimitriu.com';

    closeImage.addEventListener('click', ()=> {
        img8.className = 'degrossissement8';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
        img4.style.opacity = '1';
        img5.style.opacity = '1';
        img6.style.opacity = '1';
        img1.style.opacity = '1';
        img7.style.opacity = '1';
        img1.style.visibility = 'visible';
        img2.style.visibility = 'visible';
        img3.style.visibility = 'visible';
        img4.style.visibility = 'visible';
        img5.style.visibility = 'visible';
        img6.style.visibility = 'visible';
        img7.style.visibility = 'visible';
        closeImage.className = 'disparition';
        explore.className = 'disparition';
        lien.href = '';
        closeWork.className = 'apparition';
        close2.style.cursor = 'pointer';
        setTimeout(() => {
            explore.style.display = 'none';
        }, 700);
        for (const i of numero) {
            i.style.opacity = '1';
            i.className = 'apparition';
        }
    });
});

window.addEventListener('load', ()=> {

    if(window.matchMedia("(max-width:1024px)").matches) {
        loader.style.display = 'none';

    } else {

    container.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        container.style.display = 'inline';
    }, 3500);

    setTimeout(() => {
        loader.className = 'fondu-out';
        if (hidden) {
            opening();
        }
    }, 3000);
    };
});

function opening() {
    monNom.className = 'loadingpage';
    monJob.className = 'loadingpage';
    boutonAbout.className = 'apparition2';
    boutonWork.className = 'apparition2';
    mode.className = 'apparition2';
    email.className = 'loadingpage';
    linkedin.className = 'loadingpage';
    instagram.className = 'loadingpage';
    twitter.className = 'loadingpage';
};

window.onload = function() {
    
    if(window.matchMedia("(max-width:767px)").matches) {
        container.style.display = "none";
        portable.style.display = 'block';
    }

    window.addEventListener('resize', ()=> {

    if(window.matchMedia("(max-width:767px)").matches) {
        container.style.display = "none";
        portable.style.display = 'block';
    } else {
        container.style.display = 'block';
        portable.style.display = 'none';
        loader.style.display = 'none';
    }
});
};

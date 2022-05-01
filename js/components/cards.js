const info = [
    {
        img: 'images/icon_orgs/abrasco.png',
        label: 'frontend',
        title: 'Titulo',
        description: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
        link: 'link'
    },
    {
        img: 'images/icon_orgs/abrasco.png',
        label: 'frontend',
        title: 'Titulo',
        description: 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively',
        link: 'link'
    },
]

window.onload = function() {
    let render = [];
    
    for(var i = 0; i < info.length; i++) {
        render.push(drawCard('assets/img/projects/kdq.png', 'frontend', 'title', 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively', 'link' ))
    }

    document.getElementById("cards").innerHTML = render.join('')
}

function drawCard(img, label, title, description, link) {
    const card = `
        <div class="col s12 m6">
            <div class="card large">
                <div class="card-image">
                    <img src=${img}>
                </div>
                <div class="card-content">
                    <span class="label"> ${label} </span>
                    <span class="card-title">${title}</span>
                    <p>${description}</p>
                </div>
                <div class="card-action">
                    <a href="#">${link}</a>
                </div>
        </div>
    </div>
    `

    return card;
}
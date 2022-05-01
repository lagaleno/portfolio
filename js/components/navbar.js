
const nav = `
    <div class="row valign-wrapper">
        <div class="logo col s12 m6 right-align">
            <img src="assets/img/logo/logo.svg" alt="logo">
        </div>
        <div class="hide-on-small-only col s12 m6 left-align">
            <div class="name">
                <p> LARISSA GALENO </p>
            </div>

            <div class="links center-align">
                <a href="https://www.linkedin.com/in/lagaleno/" target='_blank'>linkedin</a> | 
                <a href="aboutme/aboutme.html" target='_blank'>resume</a> | 
                <a href="https://github.com/lagaleno" target='_blank'>github</a> | 
                <a href='mailto: galeno@dcc.ufrj.br' target='_blank'>mail</a>
            </div>
        </div>
        <div class="container hide-on-med-and-up"> 
            <ul id="slide-out" class="sidenav">
                <li><div class="user-view">
                    <div class="background">
                        <img src="images/office.jpg">
                    </div>
                    <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
                    <a href="#name"><span class="white-text name">John Doe</span></a>
                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div class="divider"></div></li>
                <li><a class="subheader">Subheader</a></li>
                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons white-text" id="menu">menu</i></a>
        </div>
    </div>


`


document.getElementById("intro").innerHTML = nav


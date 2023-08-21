let elNav = document.querySelector('nav');
let elSubNav = document.querySelector('.sub-nav');
let elBtn = document.querySelector('nav button');
let elSubNavFooter = document.querySelector('.sub-nav-footer')
    function tglBtn(){
        elBtn.classList.toggle('active');
    }
    function tglNav(){
        elNav.classList.toggle('active');
    }
    function tglSubNav(){
        elSubNav.classList.toggle('active');
    }
    function tglBtnNav(self){
        self.classList.toggle('close');
    }
    function tglH2(self){
        self.classList.toggle('active');
    }
    function tglH3(self){
        self.classList.toggle('active');
    }
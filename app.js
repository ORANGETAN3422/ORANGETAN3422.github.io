document.getElementById('proceed').onclick = function(){
    document.getElementById('main').classList.replace('active', 'inactive');
    document.getElementById('carpet').classList.replace('inactive', 'active');
    invis.style.visibility = 'visible';
}
let invis = document.querySelectorAll('.visible');
document.getElementById('p4').onclick = function(){
    document.getElementById('main').classList.replace('inactive', 'active');
    document.getElementById('carpet').classList.replace('active', 'inactive');
    invis.style.visibility = 'hidden';
}

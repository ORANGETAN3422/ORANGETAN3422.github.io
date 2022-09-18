document.getElementById('proceed').onclick = function(){
    document.getElementById('main').classList.replace('active', 'inactive');
    document.getElementById('carpet').classList.replace('inactive', 'active');
}
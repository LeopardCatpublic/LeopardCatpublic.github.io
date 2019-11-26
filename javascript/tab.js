var btn_array = document.querySelectorAll('.tab_btn');
var article_array = document.querySelectorAll('.context_article');

btn_array.forEach((btn, i) => {
    btn.onclick = function () {
        removeALL();
        btn.classList.add('active');
        article_array[i].classList.add('active');
    }
});
function removeALL() {
    btn_array.forEach(btn => {
        btn.classList.remove('active');
    });
    article_array.forEach(article => {
        article.classList.remove('active');
    });
}
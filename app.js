//swiper設定//
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 2500,
  effect: 'fade',

  autoplay: {
    delay: 1500,
  },
});

//サイトのアニメーション設定
const animationTarget = document.querySelectorAll('.animation');
document.addEventListener('scroll', () => {
  for (let i = 0; i < animationTarget.length; i++) {
    //要素までの距離を格納
    const isTarget = animationTarget[i].getBoundingClientRect().top + 
                     animationTarget[i].clientHeight * .3;

    if (window.innerHeight > isTarget) {
      animationTarget[i].classList.add('move');
    };
  };
})

//menu-buttonをクリックした時の処理
document.getElementById('menu-button').addEventListener('click', (e) => {
  e.preventDefault();
  //classを追加する
  document.getElementById('menu-button').classList.toggle('action');
  document.getElementById('nav-link').classList.toggle('action');
  document.getElementById('mask').classList.toggle('action');
});

//スムーススクロール設定
document.querySelectorAll('a[href^="#"]').forEach(link => {
  //メニューをクリックした時の処理
  link.addEventListener('click', (e) => {
    e.preventDefault();

    //スムースさせる距離
    const target = document.querySelector(link.hash),
          adjust = 30,
          offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust

    //スムースさせる結果
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    if (document.getElementById('nav-link').classList.contains('action')) {
      const timer = setInterval(() => {
        if (window.pageYOffset === offsetTop) {
          clearInterval(timer)
          document.getElementById('nav-link').classList.remove('action')
          document.getElementById('menu-button').classList.remove('action')
          document.getElementById('mask').classList.remove('action')
        }
      }, 16)
    }
  })
})


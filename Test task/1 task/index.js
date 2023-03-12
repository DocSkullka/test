const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
     let interval = setInterval(function(){
      let hours = Math.floor(seconds / 3600)
      let minutes = Math.floor(seconds / 60 % 60) 
      let second = seconds % 60
      hours = hours < 10 ? '0' + hours: hours
      minutes = minutes < 10 ? '0' + minutes: minutes
      second = second < 10 ? '0' + second: second
      timerEl.innerHTML = `${hours}:${minutes}:${second}`
      seconds--
      if(seconds < 0){
        clearInterval(interval)
      }
    }, 1000)
    buttonEl.addEventListener('click', function(){
      clearInterval(interval)
    })
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.value = e.target.value.replace(/\D/g, '')
});


buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
  inputEl.value = '';
});

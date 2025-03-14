const clock = document.getElementById('clock')


setInterval(() => {
  let date = new Date()
  console.log(date.toLocaleTimeString());

  clock.innerHTML = `${date.toLocaleTimeString('local' , { weekday: 'long'})}`

} , 1000);

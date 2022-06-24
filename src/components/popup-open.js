const popup = document.querySelector('.popup');
const popupExit = document.querySelector('.popup__conteiner_button-exit');
const popupDateIn = document.querySelector('.popup__date-in');
const popupDateOut = document.querySelector('.popup__date-out');
const popupNameIn = document.querySelector('.popup__name-in');
const popupNameOut = document.querySelector('.popup__name-out');
const popupAdressIn = document.querySelector('.popup__adress-in');
const popupAdressOut = document.querySelector('.popup__adress-out');

const point_1 = document.querySelector('.position-item-1');
const point_2 = document.querySelector('.position-item-2');
const point_3 = document.querySelector('.position-item-3');
const point_4 = document.querySelector('.position-item-4');
const point_5 = document.querySelector('.position-item-5');
const point_6 = document.querySelector('.position-item-6');
const point_7 = document.querySelector('.position-item-7');
const point_8 = document.querySelector('.position-item-8');
const point_9 = document.querySelector('.position-item-9');
const point_10 = document.querySelector('.position-item-10');
const point_11 = document.querySelector('.position-item-11');
const point_12 = document.querySelector('.position-item-12');
const point_13 = document.querySelector('.position-item-13');
const point_14 = document.querySelector('.position-item-14');
const point_15 = document.querySelector('.position-item-15');
const point_16 = document.querySelector('.position-item-16');
const point_17 = document.querySelector('.position-item-17');
const point_18 = document.querySelector('.position-item-18');
const point_19 = document.querySelector('.position-item-19');
const point_20 = document.querySelector('.position-item-20');
const point_21 = document.querySelector('.position-item-21');

popupExit.addEventListener('click', ()=>{
  popup.classList.remove("popup_show");
  // popupTitleIn.textContent = '';
  // popupTitleOut.textContent = '';
  // popupTimetableIn.textContent = '';
  // popupTimetableOut.textContent = '';
  popupDateIn.textContent = '';
  popupDateOut.textContent = '';
  popupNameIn.textContent = '';
  popupNameOut.textContent = '';
  popupAdressIn.textContent = '';
  popupAdressOut.textContent = '';
})

point_1.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.07.2022';
  popupDateOut.textContent = '10.07.2022';
  popupNameIn.textContent = 'Д.С №8 «Айгуль»';
  popupNameOut.textContent = 'Д.С №25 «Дюймовочка»';
  popupAdressIn.textContent = 'ул.Куюргазинская, 2«б»';
  popupAdressOut.textContent = 'ул.Окружная, 2«а»';
})

point_2.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '11.07.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'Д.С №25 «Дюймовочка»';
  popupNameOut.textContent = 'Д.С №26 «Золотая рыбка»';
  popupAdressIn.textContent = 'ул.Окружная, 2«а»';
  popupAdressOut.textContent = 'ул.Машиностроителей, 1«а»';
})

point_3.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '18.07.2022';
  popupDateOut.textContent = '24.07.2022';
  popupNameIn.textContent = 'Д.С №26 «Золотая рыбка»';
  popupNameOut.textContent = 'Д.С №24 «Красная шапочка»';
  popupAdressIn.textContent = 'ул.Машиностроителей, 1«а»';
  popupAdressOut.textContent = 'ул. Калинина, 8';
})

point_4.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.08.2022';
  popupDateOut.textContent = '07.08.2022';
  popupNameIn.textContent = 'Д.С №24 «Красная шапочка»';
  popupNameOut.textContent = 'Д.С №21 «Росинка»';
  popupAdressIn.textContent = 'ул. Калинина, 8';
  popupAdressOut.textContent = 'ул.М.Горького, 25/1';
})

point_5.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '08.08.2022 ';
  popupDateOut.textContent = '14.08.2022';
  popupNameIn.textContent = 'Д.С №21 «Росинка»';
  popupNameOut.textContent = 'Д.С №17 «Аленький цветочек»';
  popupAdressIn.textContent = 'ул.М.Горького, 25/1';
  popupAdressOut.textContent = 'ул. Окружная, 3«а»';
})

point_6.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '15.08.2022 ';
  popupDateOut.textContent = '21.08.2022';
  popupNameIn.textContent = 'Д.С №17 «Аленький цветочек»';
  popupNameOut.textContent = 'Д.С №11 «Сказка»';
  popupAdressIn.textContent = 'ул. Окружная, 3«а»';
  popupAdressOut.textContent = 'с.Ира ул. Молодежная, 5';
})

point_7.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '12.09.2022';
  popupDateOut.textContent = '18.09.2022';
  popupNameIn.textContent = 'Д.С «Маячок»';
  popupNameOut.textContent = 'Обр.комплекс «Перспектива»';
  popupAdressIn.textContent = 'п.Маячный, ул. Матросова, 1в';
  popupAdressOut.textContent = 'ул. Горького, 20';
})

point_8.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.09.2022';
  popupDateOut.textContent = '11.09.2022';
  popupNameIn.textContent = 'Д.С №11 «Сказка»';
  popupNameOut.textContent = 'Гимназия №1';
  popupAdressIn.textContent = 'с.Ира ул. Молодежная, 5';
  popupAdressOut.textContent = '60 лет БАССР, 14 «а»';
})

point_9.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '24.10.2022 ';
  popupDateOut.textContent = '06.11.2022';
  popupNameIn.textContent = 'СОШ с.Ира';
  popupNameOut.textContent = 'СОШ №8';
  popupAdressIn.textContent = 'с.Ира ул. 70 лет Октября, 33';
  popupAdressOut.textContent = 'п.Маячный, ул. Горького, 14';
})

point_10.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '12.09.2022';
  popupDateOut.textContent = '18.09.2022';
  popupNameIn.textContent = 'Гимназия №1';
  popupNameOut.textContent = 'Д.С «Маячок»';
  popupAdressIn.textContent = '60 лет БАССР, 14 «а»';
  popupAdressOut.textContent = 'п.Маячный, ул. Матросова, 1в';
})

point_11.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '19.09.2022';
  popupDateOut.textContent = '25.09.2022';
  popupNameIn.textContent = 'Обр.комплекс «Перспектива»';
  popupNameOut.textContent = 'СОШ №1 «Гармония»';
  popupAdressIn.textContent = 'ул. Горького, 20';
  popupAdressOut.textContent = 'ул.Машиностроителей, 6а';
})

point_12.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.10.2022';
  popupDateOut.textContent = '09.10.2022';
  popupNameIn.textContent = 'СОШ №1 «Гармония»';
  popupNameOut.textContent = 'СОШ №6';
  popupAdressIn.textContent = 'ул.Машиностроителей, 6а';
  popupAdressOut.textContent = 'ул. Комсомольская, 21';
})

point_13.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '10.10.2022';
  popupDateOut.textContent = '16.10.2022';
  popupNameIn.textContent = 'СОШ №6';
  popupNameOut.textContent = 'СОШ с.Ира';
  popupAdressIn.textContent = 'ул. Комсомольская, 21';
  popupAdressOut.textContent = 'с.Ира, ул. 70лет Октября, 33';
})

point_14.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '24.10.2022';
  popupDateOut.textContent = '06.11.2022';
  popupNameIn.textContent = 'СОШ №8';
  popupNameOut.textContent = 'Библиотека №4 «Мозаика»';
  popupAdressIn.textContent = 'с.Маячный, ул. Горького, 14';
  popupAdressOut.textContent = 'ул. К.Маркса, 25';
})

point_15.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '08.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'Библиотека №1 «Навигатор»';
  popupNameOut.textContent = 'Библиотека №9';
  popupAdressIn.textContent = 'ул. Машиностроителей, 6А';
  popupAdressOut.textContent = 'ул. Вокзальная, 26';
})

point_16.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '03.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'Библиотека №3';
  popupNameOut.textContent = 'Библиотека №2';
  popupAdressIn.textContent = 'ул.40 лет Победы, 32';
  popupAdressOut.textContent = 'п.Маячный, ул. К. Советская, 13';
})

point_17.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '21.06.2022';
  popupDateOut.textContent = '30.06.2022';
  popupNameIn.textContent = 'Библиотека «Семицветик»';
  popupNameOut.textContent = 'Д.С №8 «Айгуль»';
  popupAdressIn.textContent = 'ул.Ленина, 27';
  popupAdressOut.textContent = 'ул. Куюргазинская, 2 «б»';
})

point_18.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '13.06.2022';
  popupDateOut.textContent = '20.06.2022';
  popupNameIn.textContent = 'Библиотека №4 «Мозаика»';
  popupNameOut.textContent = 'Библиотека «Семицветик»';
  popupAdressIn.textContent = 'ул.К.Маркса, 25';
  popupAdressOut.textContent = 'ул.Ленина, 27';
})

point_19.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '10.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'Библиотека №6 «Родник»';
  popupNameOut.textContent = '';
  popupAdressIn.textContent = 'с.Ира, ул. Молодежная, 18';
  popupAdressOut.textContent = '';
})

point_20.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '07.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'Библиотека №2';
  popupNameOut.textContent = 'Библиотека №1 «Навигатор»';
  popupAdressIn.textContent = 'п.Маячный, ул. К. Советская, 13';
  popupAdressOut.textContent = 'ул.Машиностроителей, 6А';
})

point_21.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '09.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'Библиотека №9';
  popupNameOut.textContent = 'Библиотека №6 «Родник»';
  popupAdressIn.textContent = 'ул. Вокзальная, 26';
  popupAdressOut.textContent = 'с.Ира, ул. Молодежная, 18';
})

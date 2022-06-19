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
  popupNameIn.textContent = '«Мозаика»';
  popupNameOut.textContent = '«Семицветик»';
  popupAdressIn.textContent = 'ул.Куюргазинская, 2«б»';
  popupAdressOut.textContent = 'ул.Окружная, 2«а»';
})

point_2.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '11.07.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Окружная, 2«а»';
  popupAdressOut.textContent = ', ул.Машиностроителей, 1«а»';
})

point_3.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '18.07.2022';
  popupDateOut.textContent = '24.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Машиностроителей, 1«а»';
  popupAdressOut.textContent = 'ул. Калинина, 8';
})

point_4.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.08.2022';
  popupDateOut.textContent = '07.08.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул. Калинина, 8';
  popupAdressOut.textContent = 'ул.М.Горького, 25/1';
})

point_5.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '08.08.2022 ';
  popupDateOut.textContent = '14.08.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.М.Горького, 25/1';
  popupAdressOut.textContent = 'ул. Окружная, 3«а»';
})

point_6.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '15.08.2022 ';
  popupDateOut.textContent = '21.08.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул. Окружная, 3«а»';
  popupAdressOut.textContent = 'ул. Молодежная, 5';
})

point_7.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '12.09.2022';
  popupDateOut.textContent = '18.09.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул. Матросова, 1в';
  popupAdressOut.textContent = 'ул. Горького, 20';
})

point_8.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '8.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_9.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '24.10.2022 ';
  popupDateOut.textContent = '06.11.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'с.Ира ул. 70 лет Октября, 33';
  popupAdressOut.textContent = 'п.Маячный, ул. Горького, 14';
})

point_10.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '12.09.2022';
  popupDateOut.textContent = '18.09.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Аленький цветочек';
  popupAdressIn.textContent = '60 лет БАССР, 14 «а»';
  popupAdressOut.textContent = 'п.Маячный, ул. Матросова, 1в';
})

point_11.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '19.09.2022';
  popupDateOut.textContent = '25.09.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул. Горького, 20';
  popupAdressOut.textContent = 'ул.Машиностроителей, 6а';
})

point_12.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.10.2022';
  popupDateOut.textContent = '09.10.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Машиностроителей, 6а';
  popupAdressOut.textContent = 'ул. Комсомольская, 21';
})

point_13.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '13.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_14.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '24.10.2022';
  popupDateOut.textContent = '06.11.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'с.Маячный, ул. Горького, 14';
  popupAdressOut.textContent = 'ул. К.Маркса, 25';
})

point_15.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '08.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул. Машиностроителей, 6А';
  popupAdressOut.textContent = 'ул. Вокзальная, 26';
})

point_16.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '03.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.40 лет Победы, 32';
  popupAdressOut.textContent = 'п.Маячный, ул. К. Советская, 13';
})

point_17.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '02.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Ленина, 27';
  popupAdressOut.textContent = 'ул.40 лет Победы, 32';
})

point_18.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '01.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'ДЦ чтения и творчества «Мозаика»';
  popupNameOut.textContent = 'ДЦ лит-ного развития «Семицветик»';
  popupAdressIn.textContent = 'ул.К.Маркса, 25';
  popupAdressOut.textContent = 'ул.Ленина, 27';
})

point_19.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '10.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'с.Ира, ул. Молодежная, 18';
  popupAdressOut.textContent = '';
})

point_20.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '07.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'п.Маячный, ул. К. Советская, 13';
  popupAdressOut.textContent = 'ул.Машиностроителей, 6А';
})

point_21.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '09.11.2022';
  popupDateOut.textContent = '';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул. Вокзальная, 26';
  popupAdressOut.textContent = 'с.Ира, ул. Молодежная, 18';
})

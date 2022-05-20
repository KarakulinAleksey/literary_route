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
  popupDateIn.textContent = '1.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Аленький цветочек';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_2.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '2.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_3.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '3.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_4.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '4.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_5.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '5.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_6.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '6.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_7.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '7.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
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
  popupDateIn.textContent = '9.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_10.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '10.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Аленький цветочек';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_11.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '11.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_12.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '12.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
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
  popupDateIn.textContent = '14.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_15.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '15.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_16.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '16.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_17.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '17.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_18.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '18.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_19.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '19.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_20.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '20.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_21.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '21.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

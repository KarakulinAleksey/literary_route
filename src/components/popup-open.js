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
// const point_9 = document.querySelector('.position-item-9');

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
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Аленький цветочек';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_2.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_3.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_4.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_5.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_6.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_7.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

point_8.addEventListener('click', ()=>{
  popup.classList.add("popup_show");
  popupDateIn.textContent = '29.06.2022';
  popupDateOut.textContent = '17.07.2022';
  popupNameIn.textContent = 'д/с Красная шапочка';
  popupNameOut.textContent = 'д/с Дюймовочка';
  popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
  popupAdressOut.textContent = 'ул.Окружная 2-а';
})

// point_9.addEventListener('click', ()=>{
//   popup.classList.add("popup_show");
//   popupDateIn.textContent = '29.06.2022';
//   popupDateOut.textContent = '17.07.2022';
//   popupNameIn.textContent = 'д/с Красная шапочка';
//   popupNameOut.textContent = 'д/с Дюймовочка';
//   popupAdressIn.textContent = 'ул.Куюргазинская 2-б';
//   popupAdressOut.textContent = 'ул.Окружная 2-а';
// })

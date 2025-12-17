import axios from "axios";
import iziToast from "izitoast";

const refs = {
  modal: document.querySelector("#order-modal-form"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  form: document.querySelector("#order-modal-form"),
};
 
formElem.addEventListener ("submit", async e => {
  e.preventDefault();
  const { email, phone } = e.target.elements;
  const formData = {
    name: userName.value.trim(),
    phone: phone.value.trim(),
    animalId,
    comment: message.value.trim(),
  }
  try {const response = await axios.post ("https://paw-hut.b.goit.study/api/orders", formData);

const orderData = response.data;
console.log(orderData);
iziToast.success({
    title: "Success", 
    message: `Ви знайшли собі найкращого друга!`,
    position: `topLeft`,
});
e.target.reset();
closeModal();

} catch (error) {
    iziToast.error({
        title: "Error", 
        message: `В цей раз ви не змогли знайти друга. Спробуйте ще раз.`,
        position: `topLeft`,
    });
};
});


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
    
//     refs.modal.classList.toggle("is-open");
//   }
// })();
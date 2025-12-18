import axios from "axios";
import iziToast from "izitoast";

const refs = {
  modal: document.querySelector("[data-modal]"),
  closeBtn: document.querySelector("[data-modal-close]"),
  form: document.querySelector("#order-modal-form"),
};

let animalId = null; // сюди пізніше прийде id тварини

/* ================= MODAL LOGIC ================= */

function openModal(id) {
  animalId = id ?? null;
  refs.modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
  document.addEventListener("keydown", onEscKeyPress);
}

function closeModal() {
  refs.modal.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  document.removeEventListener("keydown", onEscKeyPress);
}

/* Закриття по Х */
refs.closeBtn.addEventListener("click", closeModal);

/* Закриття по кліку на overlay */
refs.modal.addEventListener("click", e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

/* Закриття по Escape */
function onEscKeyPress(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

/* ================= FORM SUBMIT ================= */

refs.form.addEventListener("submit", async e => {
  e.preventDefault();

  const { username, phone, message } = e.target.elements;

  if (!username.value || !phone.value) return;

  const data = {
    name: username.value.trim(),
    phone: phone.value.trim(),
    animalId,
    comment: message.value.trim(),
  };

  try { await axios.post(
      "https://paw-hut.b.goit.study/api/orders",
      data,
      { headers: { "Content-Type": "application/json" } }
    );

    iziToast.success({
      title: "Success",
      message: "Ви знайшли собі найкращого друга!",
      position: "topLeft",
    });

    e.target.reset();
    closeModal();

  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "В цей раз ви не змогли знайти друга. Спробуйте ще раз.",
      position: "topLeft",
    });
  }
});

/* ================= EXPORT ================= */

  // Коли зʼявиться кнопка відкриття:
  const adoptButtons = document.querySelectorAll("[data-details-modal-adopt]");
  adoptButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.animalId;
      openModal(id);
    });
  });






// import axios from "axios";
// import iziToast from "izitoast";

// const refs = {
//   modal: document.querySelector("[data-modal]"),
//   closeModalBtn: document.querySelector("[data-modal-close]"),
//   form: document.querySelector("#order-modal-form"),
// };
 
// formElem.addEventListener ("submit", async e => {
//   e.preventDefault();
//   const { email, phone } = e.target.elements;
//   const formData = {
//     name: userName.value.trim(),
//     phone: phone.value.trim(),
//     animalId,
//     comment: message.value.trim(),
//   }
//   try {const response = await axios.post ("https://paw-hut.b.goit.study/api/orders", formData);

// const orderData = response.data;
// console.log(orderData);
// iziToast.success({
//     title: "Success", 
//     message: `Ви знайшли собі найкращого друга!`,
//     position: `topLeft`,
// });
// e.target.reset();
// closeModal();

// } catch (error) {
//     iziToast.error({
//         title: "Error", 
//         message: `В цей раз ви не змогли знайти друга. Спробуйте ще раз.`,
//         position: `topLeft`,
//     });
// };
// });



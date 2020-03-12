let formDataInscription = document.getElementById('formDataInscription');

const userOrder = {};

function getValues(e) {
  // turn form elements object into an array
  const elements = Array.prototype.slice.call(e.target.elements);

  // go over the array storing input name & value pairs
  elements.forEach((el) => {
    if (el.type !== "submit") {
      userOrder[el.name] = el.value;
    }
  });

  // finally save to localStorage
  localStorage.setItem('userOrder', JSON.stringify(userOrder));
}  

formDataInscription.addEventListener("submit", getValues);
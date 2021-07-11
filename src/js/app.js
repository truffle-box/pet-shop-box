App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    // Load pets
    fetch("pets.json")
      .then(async (data) => {
        var json = await data.json();
        var petsRow = document.getElementById('petsRow');
        var petTemplate = document.getElementById('petTemplate');
        json.forEach((data) => {
          let newPetTemplate = petTemplate.cloneNode(true);
          newPetTemplate.style.display = "block";
          newPetTemplate.querySelector('.card-header').innerHTML = data.name;
          newPetTemplate.querySelector('img').src = data.picture;
          newPetTemplate.querySelector('.pet-breed').innerHTML = data.breed;
          newPetTemplate.querySelector('.pet-age').innerHTML = data.age;
          newPetTemplate.querySelector('.pet-location').innerHTML = data.location;
          newPetTemplate.querySelector('.btn-adopt').setAttribute('data-id', data.id);
          petsRow.appendChild(newPetTemplate);
        })
      })
      .catch(err => console.log(err));

    return await App.initWeb3();
  },

  initWeb3: async function () {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function () {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function () {
    // Let the DOM Load
    setTimeout(() => {
      var btns = document.getElementsByClassName("btn-adopt");
      Array.from(btns).forEach(function(btn) {
        btn.addEventListener('click', App.handleAdopt);
      });
    },70);
  },

  markAdopted: function () {
    /*
     * Replace me...
     */
  },

  handleAdopt: function (event) {
    event.preventDefault();

    var petId = parseInt(this.getAttribute('data-id'));

    /*
     * Replace me...
     */
  }

};

window.onload = () => {
  App.init();
}

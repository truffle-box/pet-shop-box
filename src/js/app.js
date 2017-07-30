App = {
  web3Provider: null,
  contracts: {},

  init() {
    // Load pets.
    $.getJSON('../pets.json', pets => {
      const petsRow = $('#petsRow')
      const petTemplate = $('#petTemplate')

      pets.forEach(pet => {
        petTemplate.find('.panel-title').text(pet.name)
        petTemplate.find('img').attr('src', pet.picture)
        petTemplate.find('.pet-breed').text(pet.breed)
        petTemplate.find('.pet-age').text(pet.age)
        petTemplate.find('.pet-location').text(pet.location)
        petTemplate.find('.btn-adopt').attr('data-id', pet.id)

        petsRow.append(petTemplate.html())
      })
    })

    return App.initWeb3()
  },

  initWeb3() {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  handleAdopt: function() {
    event.preventDefault();

    const petId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  },

  markAdopted(adopters, account) {
    /*
     * Replace me...
     */
  }

};

// initialize the app
$(() =>
  $(window).load(() => App.init())
)

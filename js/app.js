document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#winner-list');



  const formSubmitHandler = function (event) {

    //Prevent page refresh
    event.preventDefault();
        console.log('button clicked');
    // Getting playerName text input value
    const playerNameValue =  event.target.playerName.value;
    // Getting nationality text input value
    const nationalityValue =  event.target.nationality.value;
    //Getting selector value
    const positionValue = event.target.position.value;
    //Getting dropdown value
    const yearWonValue = event.target.year.value;


    //CREATING DIV CONTAINER
    const divContainer = document.createElement('div');
    const winnerList = document.querySelector('#winner-list');
    //ADDING DIV TO WINNER LIST
    winnerList.appendChild(divContainer);
    //CREATE P ELEMENT FOR NAME
    const pPlayerName = document.createElement('p');
    //SET title value to title input
    pPlayerName.textContent = playerNameValue;
    //Attach to divContainer
    divContainer.appendChild(pPlayerName);


    const pNationality = document.createElement('p');
    pNationality.textContent = nationalityValue;
    divContainer.appendChild(pNationality);

    const pPosition = document.createElement('p');
    pPosition.textContent = positionValue;
    divContainer.appendChild(pPosition);

    const pYear = document.createElement('p');
    pYear.textContent = yearWonValue;
    divContainer.appendChild(pYear);

  }


  form.addEventListener('submit', formSubmitHandler);

  const deleteListItem = () => {
    var id = event.target.id;
    console.log("delete an item: " + id);

    function removeName(itemid){
        var item = document.getElementById(itemid);
        list.removeChild(item);
    }


}
})

This project was created for learning purposes only.

The project contains the phonebook, which is designed to save contacts - their names and phones, which are also saved in the localStorage.
The life-cycle method componentDidMount checks for the contacts in the localStorage and parses them in case any of them was added their by user in the first place. If the contacts were there when the user loads the page, they will get transferred to the state prop (contacts array) and then render in the ContactList component: the contacts prop takes the array of contacts from the state of App.jsx and renders them into the markup in the ContactList component. 
While doing so, the contacts can also be filtered: the value of filter state is taken from the updateFilter, which is set to update every time the onChange event is triggered on the input field of the Filter's component.
Whenever the array collection of names and phones (contacts prop) is updated, the componentDidUpdate method adds them to the localStorage, where they're stored.
PropTypes are added to all components to exclude the possibility of wrong-type error. Thus, used during the development stage they are used to make sure, that the data type we received is the one we wanted to have in the first place.

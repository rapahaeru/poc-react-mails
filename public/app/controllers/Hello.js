class Hello {

	constructor() {
		this.HelloView = new HelloView();
	}

	checkChoicesNotReadeds() {
		let elementsLength = document.querySelectorAll(".name.readed").length,
			elementMessage = document.querySelector(".choices-not-readeds");

			this.HelloView.writeCheckedMessage(elementMessage, elementsLength);
	}

	action(event) {
		let inputs = document.querySelectorAll('li input'),
			selectedChoice = event.currentTarget.selectedOptions[0].value;

			this.filterChoices(inputs, selectedChoice);
	}

	filterChoices(elements, choice) {
		if (choice == "all") {
			this.HelloView.selectChoice(elements, true);
		} else if (choice == "none") {
			this.HelloView.selectChoice(elements, false);
		} else if (choice == "all-readed") {
			this.HelloView.selectChoiceByFilter(elements, "readed");
		} else if (choice == "last-seven") {
			this.HelloView.selectChoiceByLastDays(elements, 7);
		} else if (choice == "last-twenty") {
			this.HelloView.selectChoiceByLastDays(elements, 20);
		}
	}

}

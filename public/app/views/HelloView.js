class HelloView {

	selectChoice(elements, isChecked) {
		elements.forEach(key => key.checked = isChecked);
	}

	selectChoiceByLastDays(elements, numberOfDays) {
		elements.forEach(key => {
			let itemDateString = key.nextElementSibling.querySelector(".date").dateTime,
				itemDateParsed = Date.parse(itemDateString),
				today = new Date(),
				daysEarlier = new Date();

				daysEarlier = daysEarlier.setDate(daysEarlier.getDate() - numberOfDays);

			if(itemDateParsed > daysEarlier && itemDateParsed < today) {
				key.checked = true;
			} else {
				key.checked = false;
			}
		});
	}

	selectChoiceByFilter(elements, filter) {
		elements.forEach(key => {
			let item = key.parentElement.className;

			if (item.includes(filter)) {
				key.checked = true;
			} else {
				key.checked = false;
			}
		});
	}

	writeCheckedMessage(elementMessage, elementsLength) {
		elementMessage.innerHTML = ((elementsLength > 0) ? `Você possui ${elementsLength} opções não lidas` : "Todos os itens lidos");
	}

}

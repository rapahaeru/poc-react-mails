import React, {Component, Fragment} from 'react';

class SelectActions extends Component {

    showTotalMails(total) {
        if (total === 0){
            return 'Loading ...';
        }
        return total;
    }

    //onchange="hello.action(event)"
    render() {
        return (
            <Fragment>
                <label>
                    Escolha a opção:
                    <select className="select">
                        <option value="none">Nenhum selecionado</option>
                        <option value="all">Selecionar tudo</option>
                        <option value="last-seven">últimos 7 dias</option>
                        <option value="last-twenty">últimos 20 dias</option>
                        <option value="all-readed">e-mails lidos</option>
                    </select>
                </label>
                <span className="choices-not-readeds">({this.showTotalMails(this.props.totalMails)}) e-mails</span>
                <span className="number-selecteds">({this.props.mailsCheckeds}) selecionados</span>
            </Fragment>
        );
    }

}

export default SelectActions;
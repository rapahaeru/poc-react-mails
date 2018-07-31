import React, {Component} from 'react';

class EmailInfo extends Component {

    render() {
        return (
            <section className="info">
                <figure>
                    <img src="/assets/images/hyoga.gif" alt="descricao qualquer" />
                    <figcaption>descrição do remetente</figcaption>
                </figure>

                <p>dados do e-mail</p>
            </section>
        );
    }
}

export default EmailInfo;



function Form (){

    function formContact (){
        var nome = contact.name.value;
        var email = contact.email.value;
        var assunto = contact.subject.value;
        var mensagem = contact.messager.value;

        if(nome == ""){
            alert("Campo nome é obrigatório!");
            contact.name.focus();
            return false;
        }
        if(email == ""){
            alert("Campo e-mail é obrigatório!");
            contact.email.focus();
            return false;
        }
        if(assunto == ""){
            alert("Campo assunto é obrigatório!");
            contact.subject.focus();
            return false;
        }
        if(mensagem == ""){
            alert("Campo mensagem é obrigatório!");
            contact.messager.focus();
            return false;
        }

        else{
            alert("Formulário enviado com sucesso! Em breve entraremos em contato.")
        }
    }

    return(
        <>

            
            <form
                name="contact"
                className="c-form"
              >
                <div className="c-form__group">
                  <label for="name" className="c-form__label">Nome</label>
                  <input type="text" placeholder="Digite seu nome" id="name" className="c-form__control" required/>
                </div>
                <div className="c-form__group">
                  <label for="email" className="c-form__label">E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" id="email" className="c-form__control" required/>
                </div>
                <div className="c-form__group">
                  <label for="subject" className="c-form__label" required>Assunto</label>
                  <select id="subject" className="c-form__control">
                    <option selected disabled>Qual o assunto?</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div className="c-form__group">
                  <label for="messager" className="c-form__label" required>Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit" onClick={formContact}>Enviar</button>
                </div>
              </form>
        </>
    )
}
export default Form;
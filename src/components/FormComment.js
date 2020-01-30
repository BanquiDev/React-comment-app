import React from 'react'

class FormComment extends React.Component
{
  constructor (props){
    super(props)

    this.message = React.createRef();

    this.state = {
      sent: false,
      limite: 40,
      minimo: 10,
      overLimit: false,

      comment: {
        body: ''
      }
    }
  }

  handleKeyUp = () => {

      let value = this.message.current.value
      // console.log(value)
    this.setState(state => {
        return {
          overLimit: value.length > state.limite,
          comment: {
            body: value
          }
        }
      })
  }

  sendComment = (e) => {

    e.preventDefault()

    this.setState({
      sent: true
    })

    // fetch({
    //   method: 'post',
    //   url: '',
    //   formData: this.state.comment
    // })
  }

render() {

    let confirmation = <div>Gracias por comentar!!</div>

  return (
      <div>

          {this.state.sent ? confirmation :

            <form>
              <div>
                <textarea ref={this.message}
                onKeyUp={this.handleKeyUp}></textarea>

                <p>Restan {this.state.limite - this.state.comment.body.length} Caracteres</p>

                {this.state.overLimit ? 'Te pasaste' : ''}
              </div>

              <div>
                <button
                onClick = {this.sendComment}
                disabled = {this.state.minimo > this.state.comment.body.length || this.state.limite < this.state.comment.body.length}>
                Enviar
                </button>
              </div>

            </form>
          }
    </div>
)}





}

export default FormComment

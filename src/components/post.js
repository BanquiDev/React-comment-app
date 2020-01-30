import React from 'react'
import Comment from './Comment.js'
import FormComment from './FormComment.js'


class Post extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showComments: false,
      comments: []
    }

  }

UNSAFE_componentWillMount(){
  this.setState({
  comments:  [
      {id: 1, body:'Muy bueno', user:'banq@mail.com'},
      {id: 2, body:'Malisimo', user:'nachq@mail'},
      {id: 3, body:'Muy bueno el post!!', user:'carlos@mail'}
    ]

  })
}

UNSAFE_componentDidMount(){
  console.log('el componente ha sido montado  ')
}

UNSAFE_componentWillReceiveProps(){}

// componentWillUnMount(){}

  showComments = (e) => {

    e.preventDefault()

    this.setState(state =>{
      return {showComments: !state.showComments}
    })
  }


  render(){

    let comments

    if (this.state.showComments){
      comments = <ul>{this.state.comments.map(
        comment =>  <Comment data={comment} key={comment.id} />
      )}
      </ul>
    } else {
      comments = <div>Clikee para ver comentarios</div>
    }

      return(
    <div>
      <h2>{this.props.data.title }</h2>

      <p> { this.props.data.brief }</p>

      <p>{ this.props.data.body }</p>

      <button type='submit' onClick={this.showComments}>Mostrar Comentarios</button>

        {comments}

        <FormComment />
    </div>
  )
}
}
export default Post

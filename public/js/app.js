const App = React.createClass({

    getInitialState:function () {
      return {
          elements:[]
      }
    },
    componentDidMount:function () {
        $.get('/forms/id/1',(elements)=>{
            this.setState({elements});
        })
    },
    render: function(){
        return (
            <div>
                {this.state.elements.join(",")}
            </div>
        )
    }
});

ReactDOM.render(<App/>,document.getElementById('content'));
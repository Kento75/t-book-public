import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import BookInfo from './containers/BookInfo'
import Nav from './containers/Nav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/all' component={BookInfo} />
          <Route path='/category/1'
            render={
              () => <Redirect to='/all' />
            }
          />
          <Route path='/category/:id'
            render={
              ({ match }) => <BookInfo categoryId={match.params.id} />
            }
          />
        </Switch>
      </div>
    )
  }
}

export default App
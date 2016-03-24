import { createStore } from 'redux'
import counterApp from './reducers'
let store = createStore(counterApp)
import { increment, INCREMENT } from './actions'

// You can subscribe to the updates manually, or use bindings to your view layer.
//store.subscribe(() =>
//  console.log(store.getState())
//)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
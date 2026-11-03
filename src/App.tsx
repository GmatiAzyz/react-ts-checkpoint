import { Component } from 'react'

type GreetingProps = {
  name: string
}

function Greeting({ name }: GreetingProps) {
  return <p>Hello, {name}!</p>
}

type CounterState = {
  count: number
}

class Counter extends Component<Record<string, never>, CounterState> {
  state: CounterState = {
    count: 0,
  }

  increment = () => {
    // Use the latest state so queued updates cannot overwrite one another.
    this.setState((currentState) => ({ count: currentState.count + 1 }))
  }

  render() {
    // Parentheses keep the JSX as the return value.
    return (
      <section aria-labelledby="counter-heading">
        <h2 id="counter-heading">Counter</h2>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </section>
    )
  }
}

function App() {
  return (
    <main>
      <h1>React and TypeScript examples</h1>
      <Greeting name="World" />
      <Counter />
    </main>
  )
}

export default App

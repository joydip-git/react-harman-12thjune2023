import TodoList from '../todos/todo-list/TodoList';
import { useEffect, useState } from 'react';
import './App.css';
import EditTodo from '../todos/edit-todo/EditTodo';

function App() {
  console.log('App rendered')
  return (
    <div className="App">
      <TodoList />
      {/* <Sample /> */}
    </div>
  );
}
const Sample = () => {
  console.log('Sample rendered')

  const [num, setNum] = useState<number>(0)
  const [name, setName] = useState<string>('')

  const numHandler = () => {
    //setNum(10)
    setNum(
      (oldValue) => {
        return oldValue + 1
      }
    )
  }

  const nameHandler = (newName: string) => {
    setName(newName)
  }
  return (
    <div>
      <NestedFirst numData={num} increaseHandler={numHandler} />
      <br />
      <NestedSecond nameData={name} changeNameHamdler={nameHandler} />
    </div>
  )
}

type NestedFirstPropType = {
  numData: number,
  increaseHandler: () => void
}
const NestedFirst = (props: NestedFirstPropType) => {
  useEffect(
    () => {
      console.log('nested first effect always')

      return () => {
        console.log('cleanup always')
      }
    }
  )

  useEffect(
    () => {
      console.log('nested first effect only when numdata changes')

      return () => {
        console.log('cleanup only when numdata changes')
      }
    },
    [props.numData]
  )

  useEffect(
    () => {
      console.log('nested first effect only one time...ther very first time')

      return () => {
        console.log('cleanup only  one time...when the component is unmounted')
      }
    },
    []
  )

  console.log('Nested First rendered')
  return <div>
    Number Value:&nbsp;{props.numData}
    <br />
    <button type="button" onClick={props.increaseHandler}>Increase</button>
  </div>
}

type NestedSecondPropType = {
  nameData: string,
  changeNameHamdler: (newName: string) => void
}
const NestedSecond = (props: NestedSecondPropType) => {
  console.log('Nested Second rendered')

  return <div>
    Name Value:&nbsp;
    <input
      type='text'
      value={props.nameData}
      onChange={
        (e) => {
          // if (e.target.value !== '')
          props.changeNameHamdler(e.target.value)
        }
      } />
  </div>
}
export default App;

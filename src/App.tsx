import {Wrapper, Title, Form, TaskList} from './components/shared/index'
import { Todo } from './components/ui/index';
function App() {

  return (
    <>
      <Title>todo app</Title>
      <Wrapper>
        <Form></Form>
        <TaskList>
          <Todo id={1}>тест 1</Todo>
          <Todo id={2}>тест 2</Todo>
        </TaskList>
      </Wrapper>
    </>
  )
}

export default App

import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext()
  if (waiting) {
    return <SetupForm />
  }

  if (loading) {
    return <Loading />
  }
  console.log(questions[0])

  const { question, correct_answer, incorrect_answers } = questions[0]
  const answers = [...incorrect_answers, correct_answer]
  return (
    <main>
      <Modal />
    </main>
  )
}

export default App

import { useState } from 'react'

function App() {
  const records = [
    { title: "勉強の記録1", time: 1},
    { title: "勉強の記録2", time: 3},
    { title: "勉強の記録3", time: 5}
  ]

  return (
    <>
      <h1>学習記録一覧</h1>
        {records.map((record, index) => (
          <p key={index}>{`${record.title} ${record.time}時間`}</p>
        ))}
    </>
  )
}

export default App

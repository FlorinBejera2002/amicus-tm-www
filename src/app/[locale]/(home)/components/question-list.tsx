'use client'

export const QuestionList = () => {
  const questions = [
    { id: 'q1', text: 'How can I help with the salvation of a loved one?' },
    { id: 'q2', text: 'How can I support someone in prayer?' },
    { id: 'q3', text: 'How can I encourage someone?' }
  ]

  return (
    <div className="text-wrap flex flex-col justify-center mb-1">
      <h5 className="font-bold text-accent text-sm md:text-xl">
        Have you ever asked yourself:
      </h5>
      <div className="flex flex-col gap-2 mt-2">
        {questions.map((question) => (
          <h3
            key={question.id}
            className="text-2xl font-lato font-bold text-white md:text-2xl lg:text-4xl"
          >
            {question.text}
          </h3>
        ))}
      </div>
    </div>
  )
}

export function createQuizQuestion(item) {
    return {
        type: Create_Quiz_Question,
        item
    }
}

export function finishCreateQuiz() {
    return {
        type: ''
    }
}
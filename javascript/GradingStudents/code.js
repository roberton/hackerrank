/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

const gradingStudents = (grades) => grades.map(grade => regrade(grade))
const roundGrade = (grade) => Math.ceil(grade / 5) * 5
const isGradeTooLow = (grade) => grade < 38
const isRoundingSmallEnough = (grade, roundedGrade) => (roundedGrade - grade) < 3

function regrade(grade) {
  const roundedGrade = roundGrade(grade)
  if (isRoundingSmallEnough(grade, roundedGrade) && !isGradeTooLow(grade)) {
    return roundedGrade
  }
  return grade
}

export {
  gradingStudents
}

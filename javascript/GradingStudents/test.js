import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { gradingStudents } from "./code.js"

describe('gradingStudents', () => {
  it('Provided test case', () => {
    assert.deepStrictEqual(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33])
  })
})

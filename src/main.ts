import * as core from '@actions/core'
import fs from 'fs'

async function checkExistence(path: string): Promise<boolean> {
  try {
    await fs.promises.access(path)
  } catch (error) {
    return false
  }
  return true
}

async function run(): Promise<void> {
  try {
    const files: string = core.getInput('files', {required: true})

    const fileList: string[] = files
      .split(',')
      .map((item: string) => item.trim())
    const foundFiles: string[] = []

    // Check in parallel
    await Promise.all(
      fileList.map(async (file: string) => {
        const isPresent = await checkExistence(file)
        if (isPresent) {
          foundFiles.push(file)
        }
      })
    )

    if (foundFiles.length > 0) {
      core.setFailed('secret_exists')
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

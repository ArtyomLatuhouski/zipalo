console.log('Module.js')


async function start() {
  return await Promise.resolve('async working+dfd')
}

start().then((answer) => {
    console.log(answer)
  }
)
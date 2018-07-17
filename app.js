process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ? ')
process.stdin.on('data', (text) => {
    text = 2018 - text;
  console.log('Tu es né en ' + text)
  process.exit()
})
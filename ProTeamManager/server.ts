import express from 'express'
const app = express()

app.get('/*', (_, res) => {
	res.status(200)
	res.send('Hello, World!')
})

app.listen(3333)

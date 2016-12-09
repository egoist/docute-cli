import tinylr from 'tiny-lr'
import body from 'body-parser'
import gaze from 'gaze'

export default function ({
  files = []
} = {}) {
  const server = tinylr()
  server.listen(35729)

  gaze(['./docs/*.md'], function () {
    this.on('all', (e, file) => {
      server.notifyClients([file])
    })
  })
}

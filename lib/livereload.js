import tinylr from 'tiny-lr'
import gaze from 'gaze'

export default function ({
  files = []
} = {}) {
  const server = tinylr()
  server.listen(35729)

  gaze(files, function () {
    this.on('all', (e, file) => {
      console.log(file)
      server.notifyClients([file])
    })
  })
}

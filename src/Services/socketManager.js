import { BASE_URL1, PREFIX_URL } from '@/Config'
import io from 'socket.io-client'
import { store } from '../Store'
import { values } from 'lodash'
class SocketManager {
  socket = ''
  async establishConnection(val = () => {}) {
    this.socket = io(
      `${BASE_URL1}?authorization=${store.getState().common.authToken}`,
      {
        transports: ['websocket'],
      },
    )
    this.socket.on('connect_error', err => {
      console.log(err, 'connect_error')
    })
    this.socket.on('connectOk', res => {
      console.log('HIDU', res)
    })
    this.socket.on('connect', () => {

    })
    this.socket.on('disconnect', () => {
      console.log('...........disconnected...........')
    })
  }
  disconnectConnection() {
    this.socket.disconnect()
    this.socket.removeAllListeners()
  }
  emitEvent(eventName, data, val = () => {}) {
    this.socket?.emit(eventName, data, res => {
      val(res)
    })
  }
  onConnect(val = () => {}) {
    this.socket?.on('connect', socket => {
      val(socket)
    })
  }
  onListenEvent(eventName, val = () => {}) {
    this.socket.on(eventName, res => {
      val(res)
    })
  }
  onNewMessage(val = () => {}) {
    this.socket?.on('newMessage', res => {
      console.log(res, '@newMessage')
      val(res)
    })
  }
  otherDeviceLogin(val = () => {}) {
    this.socket?.on('otherDeviceLogin', res => {
      val(res)
    })
  }
  disconnectEvent(eventName) {
    this.socket.removeAllListeners(eventName)
  }
  removeListenerEvent() {
    this.socket.removeAllListeners()
  }
  offEvent(eventName, callback) {
    this.socket.off(eventName, callback)
  }
}

export default new SocketManager()

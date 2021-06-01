const EventEmiter = require('events')

// const emitter = new EventEmiter()

// emitter.on('any', data => {
// 	console.log('On Any', data)
// })

// emitter.emit('any', {a: 1})
// emitter.emit('any', {b: 2})


// setTimeout(() => emitter.emit('any', {c: 3}), 1500)

class Dispatcher extends EventEmiter {
	subscribe(eventName, cb) {
        console.log('Subscribe')
        this.on(eventName, cb)
	}

	dispatch(eventName, data) {
        console.log('Dispatching')
        this.emit(eventName, data)
	}
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
	console.log('ON aa', data)
})

dis.dispatch('aa', {aa: 22})

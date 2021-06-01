const EventsEmiter = require('events');

// const emiter = new EventsEmiter();

// emiter.on('any', data => {
// 	console.log('On any: ', data)
// });

// emiter.emit('any', {a: 1})

// setTimeout(() => {
// 	emiter.emit('any', {c: 3})
// }, 2000);

class Dispatcher extends EventsEmiter {
	subscribe(eventName, cb) {
		console.log('[Subscribe...]');
		this.on(eventName, cb)
	}

	dispatch(eventName, data) {
		console.log('Dispatching...');
		this.emit(eventName, data)
	}
}

const dis = new Dispatcher();

dis.subscribe('aa', data => {
	console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})
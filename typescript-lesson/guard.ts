function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	}
	return x.trim();
}

class MyResponse {
	header = 'Response Header'
	result = 'response Result'
}

class MyError {
	header = 'error header'
	message = 'error message'
}

function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result
		}
	} else {
		return {
			info: res.header + res.message
		}
	}
}

//==========
type AlertType = 'Success' | 'Danger' | 'Warning';

function setAlertType(type: AlertType) {
	
}

setAlertType('Success');
setAlertType('Warning');

const carWash: ICarWash = {
  cars: []
}
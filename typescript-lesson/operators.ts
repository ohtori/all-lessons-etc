interface Person {
	name: string,
	age: number
}

type PersonKeys = keyof Person; //name | age

const personName: PersonKeys = 'name';
//const personName2: PersonKeys = 'eman';

type User = {
	_id: number,
	name: string,
	email: string,
	createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

let user1: UserKeysNoMeta1 = 'name';
//user1 = 'edasda';
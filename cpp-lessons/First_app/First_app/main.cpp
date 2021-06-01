#include <iostream>
#include <vector>
//#include <string>
#include <map>


using namespace std;

//class SimpleTimer
//{
//public:
//	SimpleTimer() 
//	{
//		start = std::chrono::high_resolution_clock::now();
//	};
//	~SimpleTimer() {
//		end = std::chrono::high_resolution_clock::now();
//		std::chrono::duration<float> duration = end - start;
//		cout << "Duration" << duration.count() << "seconds" << endl;
//	};
//
//private:
//	std::chrono::time_point<std::chrono::steady_clock> start, end;
//};
//class MyClass
//{
//public:
//	void DoWork() {
//		this_thread::sleep_for(chrono::milliseconds(3000));
//		cout << "============\t" << "Dowork Started\t ===============" << endl;
//		this_thread::sleep_for(chrono::milliseconds(2000));
//
//		cout << "ID of thread = " << this_thread::get_id() << "dowork stopped" << endl;
//	}
//	void DoWork2(int a) {
//		this_thread::sleep_for(chrono::milliseconds(3000));
//		cout << "============\t" << "Dowork2 Started\t ===============" << endl;
//		this_thread::sleep_for(chrono::milliseconds(2000));
//
//		cout << "ID of thread = " << this_thread::get_id() << "dowork2 stopped" << endl;
//	}
//	int Sum(int a, int b) {
//		this_thread::sleep_for(chrono::milliseconds(3000));
//		cout << "============\t" << "Dowork2 Started\t ===============" << endl;
//		this_thread::sleep_for(chrono::milliseconds(2000));
//
//		cout << "ID of thread = " << this_thread::get_id() << "dowork2 stopped" << endl;
//		return a + b;
//	}
//};

void fillArray(int* const arr, int const size) {
	for (int i = 0; i < size; i++) {
		arr[i] = rand() % 10;
	}
}

void showArray(int* const arr, int const size) {
	for (int i = 0; i < size; i++) {
		cout << arr[i] << "\t";
	}
}



int main() 
{
	setlocale(LC_ALL, "jap");
	/*MyClass m;

	thread th(&MyClass::DoWork, m);

	for (size_t i = 0; i < 10; i++)
	{
		cout << "ID of thread = " << this_thread::get_id() << "main working" << i <<endl;
		this_thread::sleep_for(chrono::milliseconds(200));
	}

	th.join();*/

	string *arr = new string[10];

	cout << sizeof arr << endl;

	return 0;
}
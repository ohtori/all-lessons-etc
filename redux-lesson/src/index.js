import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/roorReducer';
import { createDEC, createINC, createAsyncINC, changeTheme } from './redux/actions';
import './styles.css';

const counter = document.getElementById('counter'); 
const addBtn = document.getElementById('add-btn'); 
const subBtn = document.getElementById('sub-btn'); 
const asyncBtn = document.getElementById('async-btn'); 
const themeBtn = document.getElementById('theme-btn'); 

const store = createStore(rootReducer, { counter: 0, theme: 'light' },  applyMiddleware(thunk));

addBtn.addEventListener('click', () => {
  store.dispatch(createINC());
})

subBtn.addEventListener('click', () => {
  store.dispatch(createDEC());
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(createAsyncINC())
})

themeBtn.addEventListener('click', () => {
  const newTheme =  document.body.classList.contains('light')
  ? 'dark'
  : 'light';
  store.dispatch(changeTheme(newTheme));
})

store.subscribe(() => {
  counter.innerText = store.getState().counter;
  document.body.className = store.getState().theme;
});

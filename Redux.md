#Redux

Actions : Any change made to the application state

Action Creator: Not stored in Store, but take the action that gets returned and send it to the stroe dispatch function

Reducers: take in actions and update part of applications state

dispatch: updated data gets dispatched (sent) to the store
store.dispatch()

Store: All your applications states/data

provider:make store avaialbe to all containers. If there is some changes in Store info, it will automatically notify Connect

Containers: fetch apps state data and use it to render(display) components

mapStateToProps(){}: We ar egoing to take our state object essentially all of the data that's inside of our redux store and run some calculation(computation) on it that's going to cause the data to eventually show up as props inside of our component.This funciton is called with all of the state inside of a redux store.
pass to connect as first parameters

- app state will become components props

Whenever application state changes components are re-rendered (updated)

Components

Middleware: Action send state Middlware instead of reducers. Can have as many middleware as I want

# Cicyle

To change sate of our app, we call an....
Action Creator
|| produces an
Action
|| gets fed to...
Dispatch
|| forwards action to...
Middleware(thunk)
|| send action to...
Reducer
|| creates new
State
|| wait untill we need tp update state again

# How to install

create-react-app name-of-app
npm install redux
npm install react-redux

# React-Redux

All our Reducers combined the together, we then eventually end up with something called redux store and that store is what contains all of our reducers and all the state of our application.
We are going to take that store that gets created and we are going to pass it as a prop into this provider

provider : Very very top of our application hierachy even above the App. Provider has eternal access to reducers
connect : Wrap component that needs to access to Store. Can communicate with provide out of props (in contact system) even there is App component in between

# import /export

if named export, import with {} (eg. import { Component } from 'react')
if default export, import without {} (eg. import React from 'react')

# export default connect()(param)

this is connect is returning function.
same as below:
function connect(){return function(){return 'Hi there'}}
first parameter is mapStateToProps. By doing so, this connect component.

# Rule

Redux does not automatically detect action creator being called
Redux does not automatically detect a function returning an object that is an 'action'
So either call store.dispatch(), or connect
When passing action creator to the connect function, it does a special operation on the functions inside of the object. It looks at all the functions include inside this object and it wraps them up in another js function. When we call the new js function the connect funciton will call automatically call action creator, automatically take action that returned and then automatically call dispatch function for us.
By passing action creator to connect function,

# Redux-thunk (Middleware)

middleware are functons that changes redux store. Help us make network request of redux app

# General Data Loading with Redux

[1] Component get rendered onto the screen
[2] Component's 'componentDidMount' lifecycle method gets called
[3] We call action creator from 'componentDidMount'
--> initiate fetch. Responsible for fetching data they need by calling an action creator

[4] Action creator runs code to make an API request
[5] API responds with data
[6] Action creator returns an 'action' with the fetched data on the 'payload' property
--> Action creators are responsible for making API requests. This is where Redux-Thunk comes into play.

[7] Some reducer sees the aciton, returns the data off the 'payload'
[8] Because we generated some new state object, redux/react-redux cause our React app to be re-rendered
-> We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps

# What's wrong with 'fetchPost'?

- Aciton creators must return plain JS objects with a type property - we are not!
  because we have async and await. We are returning something else due to ES2015
- By the time our action gets to a reducer, we won't have fetched our data!
  Even if we change async to promise, it wont work because there won't be any API dat available when Reducers run.

# Middleware

[1] Function that gets called with every action we dispatch
[2] Has the ability to STOP, MODIFY or otherwise mess around with actions
[3] Tons of open source middleware exist
[4] Most popular use of middleware is for dealing with async actions
[5] We are going to use a middleware called 'ReduxThunk' to solve our async issue

# Redux Thunk

deal with async action creator.
Action creators can return action objects
or
action creators can return functions
return function(dispatch, getState)
with this dispatch as argument, we can change any data we want
with this getState as argument, we can read or access any data that we want.
We can manually dispatch action sometime in future,
if object, Middlware will pass to Reducer.

#Reducer's rule
[1] Must return any value besides 'undefined'
[2] Produces 'state', or data to be used inside of your app using only previous state and the action (reducers are pure)
[3] Must not reach 'out of itself' to decide what value to return
[4] Must not mutate its input 'state' argument

# good way to mutate state

-- Array --
[1] Removing an element from an array
state.filter(ele => ele ! =='hi')
[2] Adding an element to an array
[...state, 'hi'][3] Replacing an element in an array
state.map(ele => ele === 'hi'?'bye':el)
-- Object --
[1] Updating a property in an object
{...state, name:'Sam'}
[2] Adding a property to an object
{...state, age:30}
[3] Removing a property from an object
{...state, age:undefined}
\_.omit(state, 'age')

＃Redux
リアクトの State を管理するためのライブラリで、Flux のデータフローをベースにしている。
MVC モデルでいうと、Model（データやロジック）が Store、View が View,Controller が Action と Dispatch

Action を発行して、Dispatcher がそれを検知し Store を更新、そして View が表示される。
Redux を導入して、State を別の場所で管理することで、debug しやすくなる。
State を変更したいときに、Actions を発行し、Reducers で Store を更新する。

Redux 三原則
１）Single Source of Truth
State をシングルツリー構造にすることにより、信頼性が高まり、debug やアプリケーションの動作予測が容易になる。

２）State is read-only
State を変更するのは、Action が発行された時のみ。Action によっってのみ、State は変更される。管理対象を絞る

３）Changes are made with pure function = reducers
State の変更方法を統一するために、Reducers は外部要因に作用されない単純な関数として実装すること。

Action
Action だけが State を変更できる。Type と payload をもつ。

Action Creator
Actions を生成するためのメソッドのこと。これを実行することで、特定の Action が生成され返却される。

Reducers
Reducers は Action を受け取り、State をどのように変化させるかを決定する関数。
State は直接変更せずに、渡されてきた State からコピーを生成し変更していく。
Switch 文で Action の Type を判断し、処理を実行。
もし、該当するタイプがなければ、State を変更してはいけないので、default で return 　 State
Reducers は直接 State を買い換えてはいけないので、Object.assign で最初にからの Object{}を渡して State をコピーする。

もし、アプリケーションが大規模になり、複数の Reducers を持つようになった場合、CombineReducers を使うことで、簡単に Reducers をまとめることができる。

Store
Store はアプリケーションの State を持っている部分。３原則にもあったように、Store は１つだけ持つようにする。
State の初期値はからの Object。
ーーーーー
import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)

// 初期値を指定したいとき
const store = createStore(todoApp, window.STATE_FROM_SERVER)
ーーーーーー

流れ

1. store.dispatch(action)を呼ぶ。
Action は状態をどのように変更するかを説明するオブジェクトで、Store オブジェクト作成後、store.dispatch(action)を行うことで状態の変更を依頼します。このメソッドはアプリケーショ n のどこからでも呼び出せます。

2.store が指定した Reducer を呼び出す。
dispatch で Store に Action が渡されると Store は現在の state と渡された actions を parameters として reducer を呼び出します。ここで、reducer は pure ファンクショ n、つまり、関数だけで副作用を持たせないことが大事。

3 rootReducer が複数の reducer の出力を単一の状態にまとめる。
場合によっては複数の reducer を作成するかもしれません。その時に reducer をまとめるのが、combineReducers（）であり、State を１つのツリー状の状にまとめることができます。

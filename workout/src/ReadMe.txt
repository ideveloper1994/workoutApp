npm installs:

npm i @expo/ex-navigation --save
( only if above installation gives error:
npm i @expo/ex-navigation babel-preset-react-native-stage-0 --save
)

npm install --save react-redux
npm install --save redux-thunk
npm install --save axios

replace .babelrc file with this:
{
  "presets": ["react-native","react-native-stage-0/decorator-support"]
}

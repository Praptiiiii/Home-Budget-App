import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BudgetEntryScreen from './assets/components/BudgetEntryScreen';
import BudgetListScreen from './assets/components/BudgetListScreen';
import { Provider } from 'react-redux';
import store, { persistor } from './assets/components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name='Budget Entry Screen'
            component={BudgetEntryScreen}
            options={{
              title: 'BUDGET ENTRY',
              headerTitleAlign:'center',
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTintColor: 'skyblue',
              headerTitleStyle: {
                fontSize: 30,
              },
            }}
          />
          <stack.Screen
            name='List Screen'
            component={BudgetListScreen}
            options={{
              title: 'BUDGET LIST SCREEN',
              headerTitleAlign:'center',
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTintColor: 'skyblue',
              headerTitleStyle: {
                fontSize: 30,
              },
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import Map from './components/Map'
import firebase from 'firebase'

const routerComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' initial={true} />
        </Scene>
        <Scene key='main'>
          <Scene
            onRight={ async () => await firebase.auth().signOut() }
            rightTitle='Logout'
            key='map'
            component={Map}
            title='Welcome'
            initial={true} />
        </Scene>
      </Scene>
      {/* <Scene key='main'>
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
          initial
        />
        <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
        <Scene key='employeeEdit' component={EmployeeEdit} title='Edit Employee' />
      </Scene> */}
    </Router>
  )
}

export default routerComponent
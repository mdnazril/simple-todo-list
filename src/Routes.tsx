import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { AuthContext } from './context/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'

type Props = {}

const AppRoutes = (props: Props) => {

    const authContext = useContext(AuthContext);

    const isAuthenticated = authContext?.user ? true : false;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />

                <Route
                    path="/protected"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            Protected Route
                        </ProtectedRoute>
                    }
                />

                <Route element="404" path="*" />

            </Routes>
        </Router>
    )
}

export default AppRoutes
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </>
    )
}

export default Routing
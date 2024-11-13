import { Route, Routes } from 'react-router-dom';
import Msg from './components/msg/Msg';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { MsgProvider } from './context/msg/MsgContext';
import { ProfileProvider } from './context/profile/ProfileContext';
import { RolProvider } from './context/rol/RolContext';
import { TokenProvider } from './context/token/TokenContext';
import DataPatientQR from './page/dataPatientQR/DataPatientQR';
import { Home } from './page/home/Home';
import RecoveryPassword from './page/recovery/RecoveryPassword';
import { RegisterUser } from './page/registerUserDefault/RegisterUser';
import UserValOptions from './page/userValOptions/UserValOptions';
import { Icons } from './components/icon/Icons';

function App() {
	return (
		<TokenProvider>
			<MsgProvider>
				<ProfileProvider>
					<RolProvider>
						<>
							<Icons iconName='newCintillo' className='optionsUser__cintillo' />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/recovery' element={<RecoveryPassword />} />
								<Route path='/registerUser' element={<RegisterUser />} />
								<Route path='/data/:code' element={<DataPatientQR />} />
								<Route element={<ProtectedRoutes />}>
									<Route path='/options/*' element={<UserValOptions />} />
								</Route>
							</Routes>
							<Msg />
						</>
					</RolProvider>
				</ProfileProvider>
			</MsgProvider>
		</TokenProvider>
	);
}

export default App;

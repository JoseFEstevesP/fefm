import { Btn } from '../../../../components/button/Btn';
import { Input } from '../../../../components/input/Input';
import { SelectComponent } from '../../../../components/input/SelectComponent';
import { formateError } from '../../../../functions/formaterError';
import { transformEnum } from '../../../../helper/transformEnum';
import { system } from '../../../../systemText';
import { FormUserAdminProps } from '../../userAdminData';
import { UserAdminRolDTOSchemaType } from '../dto/UserAdminRol.dto';
import { Permission, RolType, RolTypeText } from '../enum/dataRol';
import './../../style/formRegisterUser.scss';
import PermissionCheckboxList from './PermissionsChecbox';

const FormRol = ({
	handleSubmit,
	errors,
	error,
	control,
	register,
	loading,
	handleCheck,
	defaultValue,
}: FormUserAdminProps<UserAdminRolDTOSchemaType>) => {
	return (
		<section className={`formRegisterUser`}>
			<form onSubmit={handleSubmit} className='formRegisterUser__form'>
				<Input
					name={'name'}
					placeholder={system.rolName}
					register={register}
					error={errors.name || formateError({ error, name: 'name' })}
					className='formRegisterUser__input'
				/>
				<SelectComponent
					title={system.rolType}
					placeholder={system.rolType}
					name={'typeRol'}
					data={transformEnum({ transformEnum: RolType, text: RolTypeText })}
					error={errors.typeRol || formateError({ error, name: 'typeRol' })}
					control={control}
					className='formRegisterUser__input'
				/>
				<PermissionCheckboxList
					handleCheck={handleCheck}
					permissions={transformEnum({
						transformEnum: Permission,
					})}
					defaultValue={defaultValue}
				/>
				<Btn
					title='botón para enviar datos de registro'
					CN={{ className: 'btn--form formRegisterUser__btn' }}
					text={system.btn}
					type='submit'
					disabled={loading}
				/>
			</form>
		</section>
	);
};

export default FormRol;

import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useContext, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ContextMsg } from '../../context/msg/MsgContext';
import { FilterDataDTO, FilterDataDTOType } from '../../dto/filterDataDTO';
import { LimitFetchData, OrderEnum } from '../../enum/data';
import { transformEnum } from '../../helper/transformEnum';
import { Btn } from '../button/Btn';
import { Search } from '../input/Search';
import { SelectComponent } from '../input/SelectComponent';
import Restricted from '../restricted/Restricted';
import './filter.scss';
import { FilterProps } from './filterDataProps';

const FilterData = ({
	handleData,
	className = '',
	btn,
	handleResetData,
	permissions,
	selectOptions,
	orderProperty,
}: FilterProps) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<FilterDataDTOType>({
		resolver: zodResolver(FilterDataDTO),
	});

	const { setMsg } = useContext(ContextMsg);

	const defaultValues = useMemo(
		() => ({
			orderProperty,
			order: OrderEnum.ASC,
		}),
		[orderProperty],
	);

	const handleDataForm = useCallback(
		async (data: FilterDataDTOType) => {
			const filteredData = { ...data };
			if (!filteredData.search) delete filteredData.search;

			try {
				handleData(filteredData);
			} catch (error) {
				console.error('Error al manejar los datos:', error);
				setMsg('Ocurrió un error al procesar tu solicitud.');
			}
		},
		[handleData, setMsg],
	);

	const handleDataReset = useCallback(() => {
		reset(defaultValues);
		handleResetData();
	}, [handleResetData, reset, defaultValues]);

	return (
		<div className={`filter ${className}`}>
			{btn && (
				<Restricted per={permissions.add}>
					<div className='filter__contentBtn'>
						<Btn
							title={btn.text}
							text={btn.text}
							CN={{ className: 'btn--form' }}
							handleClick={btn.handleOpen}
						/>
					</div>
				</Restricted>
			)}
			<Restricted per={permissions.read}>
				<div className='filter__contentFilter'>
					<form
						onSubmit={handleSubmit(handleDataForm)}
						className='filter__form'
					>
						<div className='filter__btnForm'>
							<Btn
								title='submit filter'
								type='submit'
								text='Aplicar Filtro'
								CN={{ className: 'btn--form' }}
							/>
							<Btn
								title='Resetear filtro'
								type='button'
								text='Resetear filtro'
								CN={{ className: 'btn--form' }}
								handleClick={handleDataReset}
							/>
						</div>
						<SelectComponent
							title='Limite por Propiedades'
							name='limit'
							data={transformEnum({ transformEnum: LimitFetchData })}
							error={errors.limit}
							control={control}
							defaultValue={LimitFetchData['d-20']}
							variant='standard'
						/>
						<SelectComponent
							title='Ordenar por Propiedades'
							name='orderProperty'
							data={transformEnum({
								transformEnum: selectOptions.orderPropertyOptions,
								text: selectOptions.textOrderProperty,
							})}
							error={errors.orderProperty}
							control={control}
							defaultValue={orderProperty}
							variant='standard'
						/>
						<SelectComponent
							title='Orden Ascendente o Descendente'
							name='order'
							data={transformEnum({ transformEnum: OrderEnum })}
							error={errors.order}
							control={control}
							defaultValue={OrderEnum.ASC}
							variant='standard'
						/>
						<Search register={register} className='filter__search' />
					</form>
				</div>
			</Restricted>
		</div>
	);
};

export default FilterData;

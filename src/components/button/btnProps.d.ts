import React from 'react';

export type NameIcon =
	| 'logo'
	| 'cintillo'
	| 'delete'
	| 'edit'
	| 'pdf'
	| 'copi'
	| 'user'
	| 'close'
	| 'search'
	| 'interrogant'
	| 'medicationRequest'
	| 'userPatientData'
	| 'userData'
	| 'pharmacy'
	| 'calendar'
	| 'eye_hidden'
	| 'eye_visible'
	| 'exit'
	| 'search'
	| 'checkOn'
	| 'checkOff'
	| 'add'
	| 'addUser'
	| 'addMedication'
	| 'addPharmacy'
	| 'addMedicationRequest'
	| 'addPharmacyRequest'
	| 'addUserPatientData';

export interface BtnProps {
	CN?: { className?: string; classIconName?: string };
	disabled?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	nameIcon?: NameIcon;
	title: string;
	text?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

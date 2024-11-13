import { JSX, useEffect } from 'react';
export const TitlePage = ({
	title,
	children,
}: {
	title: string;
	children: JSX.Element;
}) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
	return <>{children}</>;
};

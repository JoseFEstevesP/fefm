import React from 'react';

export interface Head {
	value: string;
	label: string;
}

interface TableProps {
	head: { label: string; value: string }[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body: Array<Record<string, any> | React.ReactNode>;
	actionDelete?: boolean;
	actionUpdate?: boolean;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handelAction: (item: any) => void;
}

type data = Record<string, string>;

export interface PaginationProps {
	totalPages: number;
	currentPage: number;
	maxPagesToShow: number;
}

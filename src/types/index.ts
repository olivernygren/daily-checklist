export interface IIcon {
	className?: string;
	mt?: boolean;
}

export interface ITodoItem {
	title: string;
	category: {
		name: string;
		icon: JSX.Element;
	};
	handleDelete: () => void;
}

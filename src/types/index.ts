export interface IIcon {
	className?: string;
}

export interface ITodoItem {
	title: string;
	category: {
		name: string;
		icon: JSX.Element;
	};
}

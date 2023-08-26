import BasicButtonWrapper from '../styled/components/BasicButtonWrapper';

const BasicButton = ({label, type, secondaryClass, onClick}) => {
	return (
		<BasicButtonWrapper>
			<button
				type={type}
				className={`btn btn-${secondaryClass}`}
				onClick={onClick}
			>{label}</button>
		</BasicButtonWrapper>
	)
}

export default BasicButton;
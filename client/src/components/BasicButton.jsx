import BasicButtonWrapper from '../styled/components/BasicButtonWrapper';

const BasicButton = ({label, type, className, onClick}) => {
	return (
		<BasicButtonWrapper>
			<button
				type={type}
				className={`btn ${className}`}
				onClick={onClick}
			>{label}</button>
		</BasicButtonWrapper>
	)
}

export default BasicButton;
import BasicButtonWrapper from '../styled/components/BasicButtonWrapper';

const BasicButton = ({label, type, className, onClick, disabled, disabledLabel}) => {
	return (
		<BasicButtonWrapper>
			<button
				type={type}
				className={`btn ${className}`}
				onClick={onClick}
				disabled={disabled}
			>{disabled ? disabledLabel: label}</button>
		</BasicButtonWrapper>
	)
}

export default BasicButton;
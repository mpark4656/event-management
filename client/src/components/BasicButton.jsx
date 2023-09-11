import BasicButtonWrapper from '../styled/components/BasicButtonWrapper';

const BasicButton = ({id, label, type, name, value, className, onClick, disabled, disabledLabel}) => {
	return (
		<BasicButtonWrapper
			id={id} type={type} name={name} value={value} className={`btn ${className}`}
			onClick={onClick} disabled={disabled}
		>
			{disabled ? disabledLabel: label}
		</BasicButtonWrapper>
	)
}

export default BasicButton;
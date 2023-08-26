import BasicTextFieldWrapper from '../styled/components/BasicTextFieldWrapper';

const BasicTextField = ({label, id, type, icon, name, placeholder}) => {
	const Icon = icon;
	return (
		<BasicTextFieldWrapper>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				name={name}
				placeholder={placeholder}
			/>
			{Icon && <Icon className="form-input-icon" />}
		</BasicTextFieldWrapper>
	);
}

export default BasicTextField;